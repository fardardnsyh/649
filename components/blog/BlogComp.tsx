"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {AiOutlineCalendar, AiOutlineLike} from "react-icons/ai";
import styles from "@/styles/blogs/BlogComp.module.css";
import dbCreateIfNotExists from "@/lib/utils/dbCreateIfNotExist";
import {useEffect, useState} from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

type Blog = {
    fullname: string,
    title: string,
    description: string,
    date: string,
    link: string,
    displayImage: string,
    authorImage: string,
    idSlug: string,
}

export default function BlogComp({fullname, title, description, date, link, displayImage, authorImage, idSlug} : Blog) {
    const [likes, setLikes] = useState<number>(0)

    useEffect(() => {
        dbCreateIfNotExists(idSlug)
        const getLikes = () => {
            const likeRef = doc(db, "posts", `${idSlug}`)
            onSnapshot(likeRef, (doc) => {
                setLikes(doc.data()?.likes)
            })
        }
        getLikes()
    }, [])
    
    return (
        <div className={styles.blogComp}>
            <div className={styles.blogCompContainer}>
                <img src={displayImage} alt="" style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    overflow: "hidden",
                    zIndex: 0,
                    borderRadius: "10px"
                }} />
                <div className={styles.author}>
                    <img 
                        src={authorImage} 
                        alt={`Profile picture of`} 
                        width="25px"
                        height="25px"
                        style={{borderRadius: "50%"}}
                    />
                    <p className={styles.authorName}>{fullname}</p>
                </div>
            </div>
            <h2 className={styles.blogCompTitle}>{title}</h2>
            <p className={styles.blogCompDescription}>{description}</p>
            <div className={styles.lineDiv}></div>
            <div className={styles.blogCompInfo}>
                <div className={styles.blogCompInfoItem}>
                    <AiOutlineCalendar className={styles.blogCompIcon} />
                    <span className={styles.blogCompInfoText}>{date}</span>
                </div>
                <div className={styles.blogCompInfoItem}>
                    <AiOutlineLike className={styles.blogCompIcon} />
                    <span className={styles.blogCompInfoText}>{likes}</span>
                </div>
            </div>
            <Link href={link} className={styles.blogCompLink}>
                <p>Read more</p>
            </Link>
        </div>
    )
}