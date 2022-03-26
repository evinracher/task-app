import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

const TaskProvider = (props) => {
    const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('2022_03_TA-tasks', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [filteredTasks, setFilteredTasks] = React.useState(tasks);
    const [openModal, setOpenModal] = React.useState(false);

    const completedTasks = tasks.filter(tasks => tasks.completed).length;
    const total = tasks.length;

    React.useEffect(() => {
        console.log('Updating tasks...')
        setFilteredTasks(tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue, tasks])


    const completeTask = (id) => {
        // Changing the state. Bad practice but it doesn't matter in this case:
        // const newTasks = [...tasks];
        // newTasks[id].completed = !newTasks[id].completed;

        // Without changing the state:
        const newTasks = tasks.map((task, index) => index === id ? { ...task, completed: !task.completed } : task);
        saveTasks(newTasks);
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter((_, index) => index !== id);
        saveTasks(newTasks);
    }

    const createTask = (text) => {
        saveTasks([{ text, completed: false }, ...tasks])
    }

    return (
        <TaskContext.Provider value={{
            error,
            loading,
            filteredTasks,
            completedTasks,
            total,
            searchValue,
            setSearchValue,
            completeTask,
            deleteTask,
            createTask,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }