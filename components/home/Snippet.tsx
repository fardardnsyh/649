"use client";

import styles from "@/styles/home/Snippet.module.css";
import {IoCopyOutline} from "react-icons/io5";
import { FaReact } from "react-icons/fa";

export default function Snippet() {
    return (
        <section className={styles.snippet}>
            <section className={styles.snippetCode}>
                <section className={styles.snippetCodeHeader}>
                    <h4 className={styles.snippetCodeHeaderTitle}>Snippet of the week</h4>
                    {/* <IoCopyOutline className={styles.snippetCodeHeaderIcon} /> */}
                </section>
                <section className={styles.snippetCodeShow}>
                  <div style={{
                    overflow:"hidden",
                    marginLeft:"auto",
                    marginRight:"auto",
                    borderRadius:"0 0 10px 10px",
                    width:"100%",
                    maxWidth:"678.25px",
                    position:"relative"
                    }}>
                    <div style={{
                      width:"100%",
                      paddingBottom:"108.80943604865463%"
                    }}></div>
                    <iframe 
                      width="678.25" 
                      height="738" 
                      title="" 
                      src="https://snappify.com/embed/d979b4af-ef28-403e-aa51-6b32707db714?responsive=1&p=1&autoplay=1&b=1" 
                      allow="clipboard-write" 
                      allowFullScreen 
                      loading="lazy" 
                      style={{
                        background:"#000000",
                        position:"absolute",
                        left:0,
                        top:0,
                        width:"100%"
                      }} 
                      frameBorder="0"></iframe>
                  </div>
                </section>
            </section>
            <section className={styles.snippetFloat}>
                <section className={styles.snippetFloatHeader}>
                    <FaReact className={styles.snippetFloatHeaderIcon} />
                    <span className={styles.snippetFloatHeaderText}>React JS</span>
                </section>
                <section className={styles.snippetFloatContent}>
                    <h3 className={styles.snippetFloatContentTitle}>Data fetching with Javascript</h3>
                    <p className={styles.snippetFloatContentText}>This hook has implemented the best practices when you want to fetch data from an API into your project.</p>
                </section>
            </section>
        </section>
    )
}