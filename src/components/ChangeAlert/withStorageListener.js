import React from "react";
import { LOCAL_STORAGE_NAME } from "../../utils/constants";

const withStorageListener = (WrappedComponent) => {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            const onChange = (change) => {
                if (change.key === LOCAL_STORAGE_NAME) {
                    setStorageChange(true);
                }
            };

            window.addEventListener('storage', onChange)

            return () => {
                window.removeEventListener('storage', onChange)
            }
        }, [])


        const toggleShow = () => {
            props.synchronize();
            setStorageChange(false);
        }

        return (<WrappedComponent
            show={storageChange}
            toggle={toggleShow}
        />)
    }
}

export { withStorageListener };