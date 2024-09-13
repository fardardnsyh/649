import styles from "@/styles/blogs/Advert.module.css";
import Link from "next/link";

export default function Advert() {
    return (
        <Link href="/contact" className={styles.advert}>
            <span className={styles.advertIcon}>ad</span>
            <div className={styles.advertContent}>
                <h4 className={styles.advertContentTitle}>Advertise with contawo</h4>
                <p className={styles.advertContentText}>Contact me to advertise with Contawo.</p>
            </div>
        </Link>
    )
}