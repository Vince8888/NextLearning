"use client";
import { useState } from "react";
import TaskItem from "../taskitem/TaskItem";
import initialData from "../../data/initialData";

export default function TaskList() {
    const [listTasks, setListTasks] = useState(initialData);

    const changeCompleted = (idTask) => {
        const updatedList = listTasks.map((task) =>
            task.id === idTask ? { ...task, completed: !task.completed } : task
        );
        setListTasks(updatedList);
    };

    return (
        <>
            <ul className="list-group">
                {
                    listTasks.map((task) => {
                        return (
                            <TaskItem key={task.id} task={task} onSend={(id) => changeCompleted(id)} />
                        )
                    })
                }
            </ul>

        </>
    )
}