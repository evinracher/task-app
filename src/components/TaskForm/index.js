import React from "react";
import { TaskContext } from "../../Context";

const TaskForm = () => {
    const { createTask, setOpenModal } = React.useContext(TaskContext);
    const [newTask, setNewTask] = React.useState('');
    const handleCancel = () => {
        console.log('Canceling...');
        setOpenModal(false);
    }

    const handleSubmit = (event) => {
        console.log('Submit')
        event.preventDefault();
        createTask(newTask);
        setOpenModal(false);
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Task:</label>
            <textarea onChange={handleChange} placeholder="Enter your task" />
            <div>
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="submit">Accept</button>
            </div>
        </form>
    )
}

export { TaskForm };