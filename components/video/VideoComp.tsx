/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import {AiOutlineCalendar} from "react-icons/ai";
import styles from "@/styles/video/VideoComp.module.css";
import Link from "next/link";
import { useEffect } from "react";
import dbCreateIfNotExists from "@/lib/utils/dbCreateIfNotExist";

type Video = {
    fullname: string,
    title: string,
    description: string,
    date: string,
    link: string,
    bannerImage: string,
    authorImage: string,
    idSlug: string
}

const VideoComp = ({fullname, title, description, date, link, bannerImage, authorImage, idSlug} : Video) => {

    useEffect(() => {
        dbCreateIfNotExists(idSlug)
    }, [])

    return (
        <div className={styles.videoComp}>
            <div className={styles.videoCompContainer}>
                <img src={bannerImage} alt="" style={{
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
            <h2 className={styles.videoCompTitle}>{title}</h2>
            <p className={styles.videoCompDescription}>{description}</p>
            <div className={styles.lineDiv}></div>
            <div className={styles.videoCompInfo}>
                <div className={styles.videoCompInfoItem}>
                    <AiOutlineCalendar className={styles.videoCompIcon} />
                    <span className={styles.videoCompInfoText}>{date}</span>
                </div>
                <Link href={`/videos/${link}`} className={styles.videoCompLink}>Watch video</Link>
            </div>
        </div>
    )
}

export default VideoComp;