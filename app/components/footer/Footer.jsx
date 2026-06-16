import Image from "next/image";
import styles from "./footer.module.css";


export default function Footer() {
    return (
        <footer className={styles.mainfooter}>
            <a href="https://afpa.fr" target="_blank" rel="noopener noreferrer">
                <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} />
                AFPA
            </a>
        </footer>
    );
}


