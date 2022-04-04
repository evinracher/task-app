import React from 'react';

const initialState = (initialValue) => ({
    synchronizedItem: false,
    loading: true,
    error: false,
    item: initialValue
})

const actionTypes = {
    error: "ERROR",
    success: "SUCCESS",
    save: "SAVE",
    synchronize: "SYNCHRONIZE"
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true
    },
    [actionTypes.success]: {
        ...state,
        error: false,
        loading: false,
        synchronizedItem: true,
        item: payload
    },
    [actionTypes.save]: {
        ...state,
        item: payload
    },
    [actionTypes.synchronize]: {
        ...state,
        synchronizedItem: false,
        loading: true,
    }
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}

// Using useReducer
const useLocalStorage = (itemName, initialValue) => {
    const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));
    const { synchronizedItem, error, loading, item } = state;
    // ACTION CREATORS
    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
    const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
    const onSynchronize = () => dispatch({ type: actionTypes.synchronize })

    React.useEffect(() => {
        // Simulating a request
        if (!synchronizedItem) {
            setTimeout(() => {
                try {
                    const localItem = JSON.parse(localStorage.getItem(itemName)) ?? initialValue;
                    console.log("Success")
                    onSuccess(localItem);
                }
                catch (error) {
                    onError(error);
                }
            }, 2000)
        }
    }, [synchronizedItem])

    const saveItem = (item) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(item));
            onSave(item);
        } catch (error) {
            onError(error);
        }
    }

    const synchronizeItem = () => {
        onSynchronize();
    }

    return { item, saveItem, loading, error, synchronizeItem }
}

export { useLocalStorage };