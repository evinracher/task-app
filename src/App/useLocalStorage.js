import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
        // Simulating a request
        setTimeout(() => {
            try {
                const localItem = JSON.parse(localStorage.getItem(itemName)) ?? initialValue;
                setItem(localItem);
                setLoading(false);
            }
            catch (error) {
                setError(true)
            }
        }, 1000)
    }, [])
    const saveItem = (item) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(item));
            setItem(item)
        } catch (error) {
            setError(true);
        }
    }
    return { item, saveItem, loading, error }
}

export { useLocalStorage };