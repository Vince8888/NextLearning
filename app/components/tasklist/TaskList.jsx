"use client";
import { useEffect, useState } from "react";
import { FaTrash } from 'react-icons/fa'
import TaskItem from "../taskitem/TaskItem";
import AddTask from "../addtask/AddTask";

export default function TaskList() {
    const [listTasks, setListTasks] = useState([]);

    const changeCompleted = (idTask) => {
        const updatedList = listTasks.map((task) =>
            task.id === idTask ? { ...task, completed: !task.completed } : task
        );
        setListTasks(updatedList);
    };
    const add = (title) => {
        const newTask = {
            id: parseInt(crypto.randomUUID().substring(0, 7), 16),
            title,
            completed: false
        };

        setListTasks(listTasks => [...listTasks, newTask]);
    };
    const deleteTasks = () => {
        const updatedList = listTasks.filter((element) => element.completed === false);
        setListTasks(updatedList);
    }
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos/?userId=1')
            .then((res) => res.json())
            .then((data) => {
                setListTasks(data);
            });

    }, []);
    return (
        <>
            <ul className="list-group">
                <li className="d-flex p-2">
                    <button className="btn btn-sm ms-auto btn-outline-success me-2" onClick={deleteTasks}><FaTrash /></button>
                </li>

                {
                    listTasks.map((task) => {
                        return (
                            <TaskItem key={task.id} task={task} onSend={(id) => changeCompleted(id)} />
                        )
                    })
                }
            </ul>
            <AddTask addTask={(task) => add(task)} />
        </>
    )
}