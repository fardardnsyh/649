/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/blogs/BlogComponent.module.css";

export default function BlogHeader({post} : {post: any}) {
    return (
        <section className={styles.blogMainHeader}>
            <div className={styles.blogHeaderProf}>
                <img src={`https:${post.fields.author.fields.authorImage.fields.file.url}`} alt="" width="40px" height="40px" style={{borderRadius: "50%"}} />
                <div className={styles.blogHeaderProfCont}>
                    <h2 className={styles.blogHeaderProfContTitle}>{post.fields.author.fields.fullname}</h2>
                    <p className={styles.blogHeaderProfContText}>{post.fields.author.fields.position}</p>
                </div>
            </div>
        </section>
    )
}