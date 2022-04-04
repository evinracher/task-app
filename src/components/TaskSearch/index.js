import React from 'react';
const TaskSearch = ({ searchValue, setSearchValue, loading }) => {
    const handleChange = (event) => {
        const value = event.target.value.trim();
        setSearchValue(value)
    }

    return (
        <>
            <input
                onChange={handleChange}
                style={{ margin: 'auto' }}
                placeholder="Search task"
                disabled={loading}
            ></input>
            <p><b>{`Searching for: ${searchValue}`}</b></p>
        </>
    )
}

export { TaskSearch };