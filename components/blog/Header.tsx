"use client";

import { useState, useContext } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import styles from "@/styles/blogs/Header.module.css";
import { AppContext } from "@/context/AppContext";

const catergories : Array<string> = [
    "All", "Development", "Projects", "Lifestyle", "Technology"
]

export default function Header() {
    const [activated, setActivated] = useState<number>(0);
    const {setFilterString, setSearch} = useContext(AppContext);

    return (
        <section className={styles.header}>
            <div className={styles.headerMain}>
                <div className={styles.headerMainContent}>
                    <h2 className={styles.headerTitle}>Learning made simple by Contawo</h2>
                    <p className={styles.headerParagraph}>I am committed to using blogs to teach pupils computer science. I provide interesting and <b>educational blog</b> postings on a variety of <b>computer science</b> subjects, including <b>coding languages</b> and machine learning algorithms. My materials are created to be approachable and simple to comprehend, making them perfect for <b>students</b> of all levels.</p>
                </div>
                <div className={styles.socials}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aj_mnotoza/" className={styles.social}>
                        <BsInstagram className={styles.instagram} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/awonke-mnotoza-41a836221/" className={styles.social}>
                        <BsLinkedin className={styles.linkedin} />
                    </a>
                </div>
            </div>
            <div className={styles.headerSearch}>
                <div className={styles.headerSearchContent}>
                    <AiOutlineSearch className={styles.headerSearchIcon} />
                    <input 
                        className={styles.headerSearchInput} 
                        type="search" 
                        placeholder="Search for blogs..." 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={styles.headerCatergories}>
                    {catergories.map((catergory, index) => {
                        return (
                            <div 
                                key={index} 
                                onClick={() => {
                                    setActivated(index)
                                    setFilterString(catergory)
                                }}
                                className={activated === index? styles.headerCatergoryActive : styles.headerCatergory}
                            >
                                <p className={styles.headerCatergoryTitle}>{catergory}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}