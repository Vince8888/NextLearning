import styles from "./taskitem.module.css";

export default function TaskItem({ task }) {
    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                {task}
                <button className="btn btn-sm ml-auto btn-success" >&#x2713;</button>
            </li>
        </>
    );
}
