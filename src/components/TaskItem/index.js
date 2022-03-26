import React from "react";
import { TaskContext } from "../../Context";
const TaskItem = ({ task }) => {
    const { completeTask, deleteTask } = React.useContext(TaskContext);
    const handleComplete = () => {
        alert("You have completed the task: " + task.text)
        completeTask(task.id);
    }
    const handleDelete = () => {
        alert('You have deleted the task: ' + task.text);
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