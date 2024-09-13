import {HiOutlineViewfinderCircle} from "react-icons/hi2";
import styles from "@/styles/utils/NotFound.module.css";

const NotFound = ({text} : {text: string}) => {
    return (
        <div className={styles.notFound}>
            <HiOutlineViewfinderCircle className={styles.notFoundIcon} />
            <p className={styles.notFoundText}>No <b>{text}</b> created yet.</p>
        </div>
    )
}

export default NotFound;