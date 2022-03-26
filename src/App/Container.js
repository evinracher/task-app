import React from 'react';
import { CreateButton } from '../components/CreateButton';
import { TaskCounter } from '../components/TaskCounter';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';
import { TaskList } from '../components/TaskList';
import { TaskSearch } from '../components/TaskSearch';
import { TaskContext } from '../Context';
import { Modal } from '../Modal';

const Container = () => {
    const { error, loading, filteredTasks, openModal, setOpenModal } = React.useContext(TaskContext);
    return (<div className="container">
        <TaskCounter />
        <TaskSearch />
        <TaskList>
            {error && <p>Error: Something has failed.</p>}
            {loading && <p>Loading...</p>}
            {(!loading && !filteredTasks.length) && <p>Please add your first task.</p>}
            {filteredTasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={{ ...task, id: index }}
                />
            ))}
        </TaskList>
        {openModal &&
            <Modal>
                <TaskForm />
            </Modal>}
        <CreateButton {...{ setOpenModal }} />
    </div>)
}

export { Container };