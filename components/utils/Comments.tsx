"use client";

import { CommentsType } from "@/types/allTypes";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Comment from "./Comment";
import styles from "@/styles/utils/Comments.module.css";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import { Timestamp, addDoc, collection, query } from "firebase/firestore";

const Comments = ({commentsList, title} : CommentsType) => {
    const [inputComment, setInputComment] = useState<string>("");
    const [showComments, setShowComments] = useState(true);
    const router = useRouter();

    const addComment = () => {
        onAuthStateChanged(auth, (user) => {
            if(!user) {
                router.push("/signin")
                return
            } 
            if (inputComment == "") {
                alert("Please enter a comment")
            } else {
                const commentsRef = collection(db, `posts/${title}/comments`)
                addDoc(commentsRef, {
                    photoURL: user.photoURL,
                    fullname:  user.displayName,
                    commentText: inputComment,
                    time: Timestamp.now()
                })
                setInputComment("")
            }
        })
    }

    return (
        <section className={styles.introCommentsComp}>
            <div style={{
                width: "100%", 
                display: "flex", 
                alignContent: "center", 
                justifyContent: "space-between",
                marginBottom: ".5rem"
            }}>
                <h2 className={styles.introComment}>Comments</h2>
                {showComments ? <IoIosArrowUp
                    onClick={() => setShowComments(false)}
                    className={styles.introCommentIcon}
                /> : <IoIosArrowDown 
                    onClick={() => setShowComments(true)}
                    className={styles.introCommentIcon}
                />}
            </div>
            <div className={styles.introAddComment}>
                <input 
                    type="text" 
                    placeholder="Write a comment..." 
                    className={styles.introAddCommentInput}
                    onChange={e => setInputComment(e.target.value)}
                    value={inputComment}
                />
                <button onClick={addComment} className={styles.introAddCommentBtn}>Comment</button>
            </div>
            <div style={{
                display: `${showComments? "flex": "none" }`,
                flexDirection: "column",
                gap: ".8rem"
            }}>
                {
                    (commentsList.length === 0) ? 
                        <p className={styles.beTheFirst}>Be the first to comment...</p> : 
                        commentsList.map((eachComment) => {
                            return (
                                <Comment 
                                    key={eachComment.commentText}
                                    photoURL={eachComment.photoURL}
                                    fullname={eachComment.fullname}
                                    commentText={eachComment.commentText}
                                    time={eachComment.time}
                                />
                            )
                        })
                }
            </div>
        </section>
    )
}

export default Comments;