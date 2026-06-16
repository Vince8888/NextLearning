import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

export default function AddTask({ addTask }) {
    const [task, setTask] = useState('');

    const sendTask = (task) => {
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        } else {
            setTask('Vous devez saisir une tâche');
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <input className="w-75 p-2" placeholder="Tâche à ajouter" value={task} onChange={(e) => setTask(e.target.value)} />
                <button className="btn btn-sm ml-auto btn-outline-success m-1 me-3" onClick={() => sendTask(task)}><FaPlusSquare /> </button>
            </div>
        </>
    )
}
