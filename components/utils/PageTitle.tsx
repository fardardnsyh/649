import styles from "@/styles/utils/PageTitle.module.css";

export default function PageTitle({title} : {title: string}) {
    return (
        <div className={styles.pageTitle}>
            <div className={styles.cutline}></div>
            <h2 className={styles.pageTitleText}>{title}</h2>
        </div>
    )
}