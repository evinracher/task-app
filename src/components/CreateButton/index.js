import React from "react";
import s from "./CreateButton.module.css";

const CreateButton = ({ setOpenModal }) => {
    const handleClick = () => {
        setOpenModal(true);
    };

    return (
        <button
            className={s["btn"]}
            onClick={handleClick}
        >
            <i class="fa-solid fa-plus"></i> New Task
        </button>
    );
};

export { CreateButton };