/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/blogs/BlogComponent.module.css";

export default function BlogImage({post} : {post: any}) {
    return (
        <section className={styles.blogContainer}>
            <img 
                src={`https:${post.fields.bannerImage.fields.file.url}`} alt="" 
                style={{width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover",
                overflow: "hidden", margin: "1rem 0"}}
            />
        </section>
    )
}