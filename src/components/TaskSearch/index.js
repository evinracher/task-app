import React from 'react';
import { TaskContext } from '../../Context';
const TaskSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TaskContext);
    const handleChange = (event) => {
        const value = event.target.value.trim();
        setSearchValue(value)
    }

    return (
        <>
            <input onChange={handleChange} style={{ margin: 'auto' }} placeholder="Search task"></input>
            <h3>{`Searching for: ${searchValue}`}</h3>
        </>
    )
}

export { TaskSearch };