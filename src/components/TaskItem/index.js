import React from "react";
const TaskItem = ({ task, completeTask, deleteTask }) => {
    const handleComplete = () => {
        completeTask(task.id);
    }
    const handleDelete = () => {
        deleteTask(task.id);
    }
    return (
        <li className="task-item">
            <span onClick={handleComplete}>Done</span>
            <p className={task.completed ? 'task-item__text--completed' : ''}>{task.text}</p>
            <span onClick={handleDelete}>Delete</span>
        </li>
    )
}

export { TaskItem };