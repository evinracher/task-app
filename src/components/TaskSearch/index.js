import React from 'react';
import styles from "./TaskSearch.module.css";

const TaskSearch = ({ searchValue, setSearchValue, loading }) => {
    const handleChange = (event) => {
        const value = event.target.value.trim();
        setSearchValue(value);
    };

    return (
        <div className={styles["search"]}>
            <input
                className={styles["search__input"]}
                onChange={handleChange}
                style={{ margin: 'auto' }}
                placeholder="Search task"
                disabled={loading}
            ></input>
            <p><b>{`Searching for: ${searchValue}`}</b></p>
        </div>
    );
};

export { TaskSearch };