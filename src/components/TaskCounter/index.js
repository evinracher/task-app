import React from 'react';
import './TaskCounter.css';

const TaskCounter = ({ completedTasks, total, loading }) => {
    return (
        <h2 className={`task-counter--title ${loading ? "task-counter__loading":""}`}>{`You have completed ${completedTasks} of ${total} tasks`}</h2>
    );
}

// export default TaskCounter;
// named export:
export { TaskCounter };