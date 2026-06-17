"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import TaskItem from "../taskitem/TaskItem";
import AddTask from "../addtask/AddTask";
import { Circles } from "react-loader-spinner";

export default function TaskList() {
    const [listTasks, setListTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const changeCompleted = (idTask) => {
        const updatedList = listTasks.map((task) =>
            task.id === idTask
                ? { ...task, completed: !task.completed }
                : task
        );
        setListTasks(updatedList);
    };

    const add = (title) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            completed: false
        };

        setListTasks((prev) => [...prev, newTask]);
    };

    const deleteTasks = () => {
        setListTasks((prev) =>
            prev.filter((t) => !t.completed)
        );
    };

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            setListTasks(JSON.parse(savedTasks));
            setIsLoaded(true);
        } else {
            fetch("https://jsonplaceholder.typicode.com/todos/?userId=1")
                .then((res) => res.json())
                .then((data) => {
                    setListTasks(data);
                    setIsLoaded(true);
                });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(listTasks)
        );
    }, [listTasks]);

    return (
        <>
            {!isLoaded && (
                <div className="d-flex align-items-center justify-content-center p-2">
                    <Circles visible={true} />
                </div>
            )}

            <ul className="list-group">
                <li className="d-flex p-2">
                    <button
                        className="btn btn-sm ms-auto btn-outline-success me-2"
                        onClick={deleteTasks}
                    >
                        <FaTrash />
                    </button>
                </li>

                {listTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onSend={changeCompleted}
                    />
                ))}
            </ul>

            <AddTask addTask={add} />
        </>
    );
}