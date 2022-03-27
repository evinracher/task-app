import React from 'react';
import './App.css';
import { CreateButton } from '../components/CreateButton';
import { TaskCounter } from '../components/TaskCounter';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';
import { TaskList } from '../components/TaskList';
import { TaskSearch } from '../components/TaskSearch';
import { TaskHeader } from '../components/TaskHeader';
import { Modal } from '../Modal';
import { useTasks } from './useTasks';
const App = () => {
  const {
    error,
    loading,
    filteredTasks,
    openModal,
    setOpenModal,
    completedTasks,
    total,
    searchValue,
    setSearchValue,
    createTask,
    deleteTask,
    completeTask
  } = useTasks();

  return (
    <React.Fragment>
      <TaskHeader>
        <TaskCounter completedTasks={completedTasks} total={total} />
        <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TaskHeader>
      <TaskList>
        {error && <p>Error: Something has failed.</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !filteredTasks.length) && <p>Please add your first task.</p>}
        {filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={{ ...task, id: index }}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </TaskList>
      {openModal &&
        <Modal>
          <TaskForm createTask={createTask} setOpenModal={setOpenModal} />
        </Modal>}
      <CreateButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
