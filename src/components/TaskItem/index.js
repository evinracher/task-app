import React from "react";
import s from "./TaskItem.module.css";
import cn from "classnames";

const TaskItem = ({ task, completeTask, deleteTask }) => {
    const handleComplete = () => {
        completeTask(task.id);
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };

    return (
        <li className={s["task"]}>
            <span
                className={cn(s["task__icon"])} onClick={handleComplete}>
                <i className={cn("fa-solid fa-check",
                    s["complete"],
                    { [s.completed]: task.completed }
                )} />
            </span>
            <p
                className={cn({ [s['task__text--completed']]: task.completed })}>
                {task.text}
            </p>
            <span
                className={s["task__icon"]}
                onClick={handleDelete}>
                <i className={`fa-solid fa-trash ${s["delete"]}`} />
            </span>
        </li>
    );
};

export { TaskItem };