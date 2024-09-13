import {useEffect, useState} from "react";
import styles from "@/styles/utils/AnimateTitle.module.css";

const AnimateTitle = ({word} : {word: string}) => {
    const wordList : Array<string> = word.split(" ");
    const [selectedWord, setSelectedWord] = useState(50);

    return (
        <div style={{zIndex: 5}}>
            <span className={styles.animateTitle}>
                {
                    wordList.map((each, index) => {
                        return (
                            <p
                                key={index}
                                className={(selectedWord === index) ? styles.selected : styles.unSelected}
                                onMouseMove={() => setSelectedWord(index)}
                                onMouseLeave={() => setSelectedWord(50)}
                            >{each}</p>
                        )
                    })
                }
            </span>
        </div>
    )
}

export default AnimateTitle;