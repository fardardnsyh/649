import styles from "@/styles/utils/BlurContainer.module.css";
import { useEffect, useState } from "react";

const BlurContainer = ({children} : {children : React.ReactNode}) => {
    // const [cursorCoordinates, setCursorCoordinates] = useState({x: 0, y: 0})

    return (
        <div className={styles.blurContainer}>
            {children}
        </div>
    )
}

export default BlurContainer;