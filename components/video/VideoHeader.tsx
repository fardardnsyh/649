import { useState, useContext } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import styles from "@/styles/video/VideoHeader.module.css";
import dynamic from "next/dynamic";
import Follow from "../utils/Follow";
import head from "@/assets/thumb.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppContext } from "@/context/AppContext";

const catergories : Array<string> = [
    "All", "Development", "Projects", "Lifestyle", "Technology"
]

const VideoHeader = () => {
    const [activated, setActivated] = useState<number>(0);
    const router = useRouter();
    const {setFilterString, setSearch} = useContext(AppContext);

    return (
        <section className={styles.videoHeader}>
            <div className={styles.videoHeaderMain}>
                <div className={styles.videoHeaderVideo}>
                    <Image 
                        src={head}
                        alt=""
                        style={{
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover",
                            overflow: "hidden",
                            borderRadius: "10px"
                        }}
                    />
                    <BsYoutube className={styles.videoHeaderVideoIcon} onClick={() => router.push("/videos/intro")} />
                </div>
                <div className={styles.videoHeaderMainContent}>
                        <h2 className={styles.videoHeaderTitle}>Learning made simple by Contawo</h2>
                        <p className={styles.videoHeaderParagraph}>I am committed to using blogs to teach pupils computer science. I provide interesting and <b>educational blog</b> postings on a variety of <b>computer science</b> subjects, including <b>coding languages</b> and machine learning algorithms. My materials are created to be approachable and simple to comprehend, making them perfect for <b>students</b> of all levels.</p>
                        <Follow />
                </div>
            </div>
            <div className={styles.videoHeaderSearch}>
                <div className={styles.videoHeaderSearchContent}>
                    <AiOutlineSearch className={styles.videoHeaderSearchIcon} />
                    <input 
                        className={styles.videoHeaderSearchInput} 
                        type="search" 
                        placeholder="Search for videos..." 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={styles.videoHeaderCatergories}>
                    {catergories.map((catergory, index) => {
                        return (
                            <div 
                                key={index} 
                                onClick={() => {
                                    setActivated(index)
                                    setFilterString(catergory)
                                }}
                                className={activated === index? styles.videoHeaderCatergoryActive : styles.videoHeaderCatergory}
                            >
                                <p className={styles.videoHeaderCatergoryTitle}>{catergory}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default dynamic (() => Promise.resolve(VideoHeader), {ssr: false})
