import React from "react";
import s from "./TaskForm.module.css";

const TaskForm = ({ createTask, setOpenModal }) => {
    const [newTask, setNewTask] = React.useState('');
    const handleCancel = () => {
        console.log('Canceling...');
        setOpenModal(false);
    };

    const handleSubmit = (event) => {
        console.log('Submit');
        event.preventDefault();
        createTask(newTask);
        setOpenModal(false);
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
        <form className={s["task-form"]} onSubmit={handleSubmit}>
            <label>Task:</label>
            <textarea className={s["input"]} onChange={handleChange} placeholder="Enter your task" />
            <div className={s["actions"]}>
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="submit">Accept</button>
            </div>
        </form>
    );
};

export { TaskForm };