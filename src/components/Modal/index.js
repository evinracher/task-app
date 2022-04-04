import ReactDOM from 'react-dom';
import s from "./Modal.module.css";

const Modal = ({ children }) => {
    const content = (
        <div className={s["modal"]}>
            {children}
        </div>
    );

    return ReactDOM.createPortal(
        content,
        document.getElementById('modal')
    );
};

export { Modal };