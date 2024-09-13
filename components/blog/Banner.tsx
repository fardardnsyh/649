"use client";

import logo from "../../assets/Avatar.png";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/blogs/Banner.module.css";
import {BsFillCircleFill, BsCircle} from "react-icons/bs"
import { useRouter } from "next/navigation";

const bannerData = [
    {
        id: "5AmCFx1vRnc0wS80d6XTh4",
        authorName: "Awonke Mnotoza",
        blogTitle: "Understanding the DOM with Javascript",
        blogDescription: "The Document Object Model (DOM), which is a component of the powerful compute..."
    },
    {
        id: "2uLJCZXshWYeZHZVy6SgZU",
        authorName: "Awonke Mnotoza",
        blogTitle: "Local Storage with JavaScript",
        blogDescription: "Local storage is a web browser feature that allows you to store data locally..."
    },
    {
        id: "01iQcnOc0PPi6dXOKhIorw",
        authorName: "Awonke Mnotoza",
        blogTitle: "Data Fetching with JavaScript",
        blogDescription: "In the world of web development, fetching data is a common task that involves..."
    },
]

export default function Banner() {
    const [silderIndex, setSliderIndex] = useState<number>(0);
    const selectedData = bannerData[silderIndex];
    const router = useRouter();

    setTimeout(() => {
        if(silderIndex < bannerData.length - 1) {
            setSliderIndex(silderIndex + 1)
        } else {
            setSliderIndex(0)
        }
    }, 5000);

    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent} onClick={() => router.push(`/blogs/${selectedData.id}`)}>
                <div className={styles.author}>
                    <Image 
                        src={logo} 
                        alt={`Profile picture of ${selectedData.authorName}`} 
                        width={30}
                        height={30}
                        style={{borderRadius: "50%"}}
                    />
                    <p className={styles.authorName}>{selectedData.authorName}</p>
                </div>
                <h1 className={styles.bannerTitle}>{selectedData.blogTitle}</h1>
                <p className={styles.bannerDescription}>{selectedData.blogDescription}</p>
            </div>
            <div className={styles.slider}>
                {bannerData.map((d, index) => {
                    return (
                        <div key={d.id}>
                            {(index === silderIndex) ? <BsFillCircleFill className={styles.sliderIcon} /> : <BsCircle className={styles.sliderIcon} />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}