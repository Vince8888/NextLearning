import Link from 'next/link';
import styles from "./page.module.css";


export default function ToDOList() {
    return (
        <div className={styles.page}>
            <Link href="/">Back to home</Link>
            <main>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="card list-group m-3">
                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        Se former sur React
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        Répondre appel d'offres
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        Signer contrat
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        Envoyer mail
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                </ul>
            </main>
        </div>
    );
}
