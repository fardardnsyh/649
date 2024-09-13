/* eslint-disable @next/next/no-img-element */
import logo from "@/assets/logo.jpg";
import { CommentType } from "@/types/allTypes";
import { GoDotFill } from "react-icons/go";
import styles from "@/styles/utils/Comment.module.css";

export default function Comment({photoURL, fullname, commentText, time} : CommentType) {
    const getTime = time.toDate().toDateString();
    
    return (
        <div className={styles.introComments}>
            <img src={`${(photoURL != "") ? photoURL : logo}`} alt="" width={25} height={25} style={{borderRadius: "50%"}} />
            <div style={{display: "flex", flexDirection: "column"}}>
                <div className={styles.commentHeader}>
                    <h2 className={styles.introCommentsAuthor}>{(fullname != "") ? fullname : "Guest User"}</h2>
                    <GoDotFill className={styles.commentHeaderIcon} />
                    <p className={styles.commentHeaderDate}>{getTime}</p>
                </div>
                <p className={styles.introCommentsText}>{commentText}</p>
            </div>
        </div>
    )
}