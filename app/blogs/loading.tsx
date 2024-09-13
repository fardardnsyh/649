"use client";

import PageTitle from "@/components/utils/PageTitle";
import styles from "@/styles/blogs/BlogsLoader.module.css";
import { BsFillCircleFill } from "react-icons/bs";

export default function LoadingBlogs() {
    return (
        <section className={styles.blogsLoader}>
            <section className={styles.blogsLoaderHeader}>
                <section className={styles.blogsLoaderHeaderMain}>
                    <section className={styles.blogsLoaderHeaderContent}>
                        <div className={styles.blogsLoaderHeaderContentTitle}></div>
                        <div className={styles.blogsLoaderHeaderContentTexts}>
                        {
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((val, index)=> {
                                return (
                                    <div key={index} className={styles.blogsLoaderHeaderContentText}></div>
                                )
                            })
                        }
                        </div>
                    </section>
                    <section className={styles.blogsLoaderHeaderSocials}>
                        <div className={styles.blogsLoaderHeaderSocial}></div>
                        <div className={styles.blogsLoaderHeaderSocial}></div>
                    </section>
                </section>
                <section className={styles.blogsLoaderSearch}>
                    <section className={styles.blogsLoaderSearchInput}></section>
                    <section className={styles.blogsLoaderSearchToggles}>
                    {
                        [0, 0, 0, 0, 0].map((val, index)=> {
                            return (
                                <span key={index} className={styles.blogsLoaderSearchToggle}></span>
                            )
                        })
                    }
                    </section>
                </section>
            </section>
            <PageTitle title="The articles" />
            <section className={styles.blogsLoaderBan}>
                <div className={styles.blogsLoaderBanner}></div>
                <div className={styles.blogsLoaderBannerSlides}>
                    {
                        [0, 0, 0].map((val, index) => {
                            return (
                                <BsFillCircleFill key={index} className={styles.blogsLoaderBannerSlide} />
                            )
                        })
                    }
                </div>
            </section>
            <section className={styles.blogsLoaderList}>
                {
                    [0, 0, 0, 0].map((val, index)=> {
                        return (
                            <div key={index} className={styles.blogsLoaderListItem}></div>
                        )
                    })
                }
                <div></div>
            </section>
        </section>
    )
}