import styles from "./taskitem.module.css";

export default function TaskItem({ task, onSend }) {
    let classButton = "btn btn-sm ml-auto " + (task.completed ? 'btn-success' : 'btn-outline-success');
    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                {task.title}
                <button className={classButton} onClick={() => onSend(task.id)}>&#x2713;</button>
            </li>
        </>
    );
}
