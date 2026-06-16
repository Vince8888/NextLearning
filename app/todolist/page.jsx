import Link from 'next/link';
import styles from "./page.module.css";
import TaskList from '../components/tasklist/TaskList';


export default function ToDOList() {
    return (
        <div className={styles.page}>
            <Link href="/">Back to home</Link>
            <main>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="card list-group m-3">
                    <TaskList />
                </ul>
            </main>
        </div>
    );
}
