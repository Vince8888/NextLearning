"use client";
import { useState } from "react";
import TaskItem from "../taskitem/TaskItem";
import initialData from "@/app/data/initialData";

export default function TaskList() {
    const [listTasks, setListTasks] = useState(initialData);

    return (
        <>
            <ul className="list-group">
                {
                    listTasks.map((task) => {
                        return (
                            <TaskItem key={task.id} task={task.title} />
                        )
                    })
                }
            </ul>
        </>
    )
}