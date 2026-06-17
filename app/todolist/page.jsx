import Link from 'next/link';
import styles from "./page.module.css";
import TaskItem from '../components/taskitem/TaskItem';


export default function ToDOList() {
    return (
        <div className={styles.page}>
            <Link href="/">Back to home</Link>
            <main>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="card list-group m-3">
                    <TaskItem task="Se former sur React" />
                    <TaskItem task="Répondre appel d'offres" />
                    <TaskItem task="Signer contrat" />
                    <TaskItem task="Envoyer mail" />
                </ul>
            </main>
        </div>
    );
}
