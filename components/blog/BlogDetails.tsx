"use client";

import dateFormat from "@/lib/utils/dateFormat";
import useShareLink from "@/lib/utils/shareLink";
import styles from "@/styles/blogs/BlogComponent.module.css";
import { usePathname } from "next/navigation";
import { AiOutlineLike } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

export default function BlogDetails({post, likes, setLikeClick} : {
    post: any,
    likes: number,
    setLikeClick: (likeClick: boolean) => void
}) {
    const pathname = usePathname();
    const shareButton = useShareLink(`https://contawo.com${pathname}`, post.fields.title, post.fields.videoDescription);

    return (
        <section className={styles.blogDetails}>
            <div className={styles.blogDetailsContainer}>
                <div className={styles.blogDetailsContent}>
                    <CiCalendarDate className={styles.blogDetailsContentIcon} />
                    <p className={styles.blogDetailsContentText}>{dateFormat(post.fields.publishDate)}</p>
                </div>
                <div className={styles.blogDetailsLine}></div>
                <div className={styles.blogDetailsContain}>
                    <div className={styles.blogDetailsContent}>
                        <AiOutlineLike onClick={() => setLikeClick(true)} className={styles.blogDetailsContentIcon} />
                        <span className={styles.blogDetailsContentText}>{likes}</span>
                    </div>
                    <div className={styles.blogDetailsContent} onClick={shareButton}>
                        <BiShareAlt className={styles.blogDetailsContentIcon} />
                        <span className={styles.blogDetailsContentText}>share</span>
                    </div>
                </div>
            </div>
        </section>
    )
}