import styles from "@/styles/blogs/BlogLoader.module.css";
import { AiOutlineLike } from "react-icons/ai";
import {CiCalendarDate} from "react-icons/ci";
import {BiShareAlt} from "react-icons/bi";

export default function LoadingBlog() {
    return (
        <section className={styles.blogLoader}>
            <section className={styles.blogLoaderMain}>
                <section className={styles.blogLoaderMainTop}>
                    <div className={styles.blogLoaderMainTopImage}></div>
                    <div className={styles.blogLoaderMainTopInfo}>
                        <div className={styles.blogLoaderMainTopInfoAuthor}></div>
                        <div className={styles.blogLoaderMainTopInfoText}></div>
                    </div>
                </section>
                <div className={styles.blogLoaderTitle}></div>
                <div className={styles.blogLoaderImage}></div>
                <section className={styles.blogDetails}>
                    <div className={styles.blogDetailsContainer}>
                        <div className={styles.blogDetailsContent}>
                            <CiCalendarDate className={styles.blogDetailsContentIcon} />
                            <span className={styles.blogDetailsContentDate}></span>
                        </div>
                        <div className={styles.blogDetailsLine}></div>
                        <div className={styles.blogDetailsContain}>
                            <div className={styles.blogDetailsContent}>
                                <AiOutlineLike className={styles.blogDetailsContentIcon} />
                                <span className={styles.blogDetailsContentNumber}></span>
                            </div>
                            <div className={styles.blogDetailsContent}>
                                <BiShareAlt className={styles.blogDetailsContentIcon} />
                                <span className={styles.blogDetailsContentText}>share</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.blogLoaderContent}>
                    <div className={styles.blogLoaderContentTitle}></div>
                    <div className={styles.blogLoaderContentTexts}>
                        {
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((val, index) => {
                                return (
                                    <span key={index} className={styles.blogLoaderContentText}></span>
                                )
                            })
                        }
                    </div>
                    <div className={styles.blogLoaderContentTitle}></div>
                    <div className={styles.blogLoaderContentTexts}>
                        {
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((val, index) => {
                                return (
                                    <span key={index} className={styles.blogLoaderContentText}></span>
                                )
                            })
                        }
                    </div>
                </section>
            </section>
            <section className={styles.blogLoaderSide}>
                <div className={styles.blogLoaderSideAd}>
                    <span className={styles.blogLoaderSideAdIcon}>ad</span>
                    <div className={styles.blogLoaderSideAdContent}>
                        <h4 className={styles.blogLoaderSideAdContentTitle}>Advertise with contawo</h4>
                        <p className={styles.blogLoaderSideAdContentText}>Contact me to advertise with Contawo.</p>
                    </div>
                </div>
                <div className={styles.blogLoaderSideComment}></div>
            </section>
        </section>
    )
}