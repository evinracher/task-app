import React from 'react';
import { CreateButton } from '../../components/CreateButton';
import { TaskCounter } from '../../components/TaskCounter';
import { TaskItem } from '../../components/TaskItem';
import { TaskList } from '../../components/TaskList';
import { TaskSearch } from '../../components/TaskSearch';
import { TaskHeader } from '../../components/TaskHeader';
import { ChangeAlertWithStorageListener } from '../../components/ChangeAlert';
import s from "./Home.module.css";

function Home({ taskData }) {
  const {
    error,
    loading,
    filteredTasks,
    completedTasks,
    total,
    searchValue,
    setOpenModal,
    setSearchValue,
    deleteTask,
    completeTask,
    synchronizeTasks
  } = taskData;

  return (
    <div className={s["container"]}>
      <TaskHeader loading={loading}>
        <TaskCounter
          completedTasks={completedTasks}
          total={total}
        />
        <TaskSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TaskHeader>
      <TaskList
        error={error}
        loading={loading}
        total={total}
        filteredTasks={filteredTasks}
        searchValue={searchValue}
        onError={() => <p>Error: Something has failed.</p>}
        onLoading={() => <p>Loading...</p>}
        onEmpty={() => <p>Please add your first task.</p>}
        onEmptyResults={(value) => <p>There is not result for: <b>{value}</b></p>}
      >
        {(task, index) => <TaskItem
          key={index}
          task={{ ...task, id: index }}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />}
      </TaskList>
      <div className={s["actions"]}>
        <CreateButton setOpenModal={setOpenModal} />
        <ChangeAlertWithStorageListener
          synchronize={synchronizeTasks}
        />
      </div>

    </div>
  );
}

export default Home;
