import React from 'react';
import { TaskContext } from '../../Context';
import './TaskCounter.css';

const TaskCounter = () => {
    const { completedTasks, total } = React.useContext(TaskContext);
    return (
        <h2 className="task-counter--title">{`You have completed ${completedTasks} of ${total} tasks`}</h2>
    );
}

// export default TaskCounter;
// named export:
export { TaskCounter };