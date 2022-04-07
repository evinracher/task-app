import React from 'react';
import { TaskForm } from '../components/TaskForm';
import { Modal } from '../components/Modal';
import { useTasks } from '../hooks/useTasks';
import Home from './Home';

const App = () => {
  const {
    createTask,
    openModal,
    ...taskData
  } = useTasks();

  return (<>
    <Home taskData={taskData} />
    {openModal &&
      <Modal>
        <TaskForm
          createTask={createTask}
          setOpenModal={taskData.setOpenModal}
        />
      </Modal>}
  </>);
};

export default App;
