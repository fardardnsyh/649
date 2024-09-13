"use client";

import styles from "@/styles/blogs/BlogComponent.module.css";
import BlogImage from "./BlogImage";
import { useEffect, useState } from "react";
import { CommentType } from "@/types/allTypes";
import { collection, doc, increment, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import BlogDetails from "./BlogDetails";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { options } from "@/lib/content/Options";
import Comments from "../utils/Comments";
import Advert from "./Advert";
import BlogHeader from "./BlogHeader";

export default function BlogMain({post, slug} : {post: any, slug: string}) {
    const [allComments, setAllComments] = useState<Array<CommentType>>([]);
    const [likes, setLikes] = useState<number>(0)
    const [likeClick, setLikeClick] = useState<boolean>(false);

    useEffect(() => {
        const commentsRef = collection(db, `posts/${slug}/comments`)
        const q = query(commentsRef, orderBy("time", "desc"))
        onSnapshot(q, (snapshot) => {
            const newList = snapshot.docs.map(doc => {
                let document = doc.data() as CommentType;
                return document;
            })
            setAllComments(newList)
        })
        const getLikes = async () => {
            const likeRef = doc(db, "posts", `${slug}`)
            onSnapshot(likeRef, (doc) => {
                setLikes(doc.data()?.likes)
            })
        }
        getLikes()
    }, [slug])

    useEffect(() => {
        const getLikes = async () => {
            const likeRef = doc(db, "posts", `${slug}`)
            onSnapshot(likeRef, (doc) => {
                setLikes(doc.data()?.likes)
            })
        }
        if(likeClick) {
            const likeRef = doc(db, "posts", `${slug}`)
            updateDoc(likeRef, {
                likes: increment(1)
            }).then(() => {
                setLikeClick(false)
                getLikes()
            })
        }
    }, [likeClick, slug])

    return (
        <section className={styles.blogComp}>
            <section className={styles.blogMain}>
                <BlogHeader post={post} />
                <h1 className={styles.blogTitle}>{post.fields.title}</h1>
                <BlogImage post={post} />
                <BlogDetails post={post} likes={likes} setLikeClick={setLikeClick} />
                <section>
                    {documentToReactComponents(post.fields.content, options)}
                </section>
            </section>
            <section className={styles.blogCompSide}>
                <Comments commentsList={allComments} title={slug} />
                <Advert />
            </section>
        </section>
    )
}