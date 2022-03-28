import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
    const [synchronizedItem, setSynchronizedItem] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
        // Simulating a request
        if (!synchronizedItem) {
            setTimeout(() => {
                try {
                    const localItem = JSON.parse(localStorage.getItem(itemName)) ?? initialValue;
                    setItem(localItem);
                    setLoading(false);
                    setSynchronizedItem(true);
                }
                catch (error) {
                    setError(true)
                }
            }, 1000)
        }
    }, [synchronizedItem])

    const saveItem = (item) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(item));
            setItem(item)
        } catch (error) {
            setError(true);
        }
    }

    const synchronizeItem = () => {
        setLoading(true);
        setSynchronizedItem(false);
    }

    return { item, saveItem, loading, error, synchronizeItem }
}

export { useLocalStorage };