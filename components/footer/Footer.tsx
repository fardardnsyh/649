"use client";

import LogoSvg from "@/svg/LogoSvg";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Footer.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const Footer = () => {
    const [subscribed, setSubscribed] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [mail, setMail] = useState<string>("")

    const submitEmail = () => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]*$/
        if (mail.match(validRegex)) {
            setError("")
            const mailRef = collection(db, "newsletter")
            addDoc(mailRef, {
                email: mail
            }).then(() => {
                setError("")
                setMail("")
                setSubscribed(true)
            }).catch(() => {
                setError("Could not subscribe email. Please try again.")
            })
        } else {
            setError("Please enter a valid email.")
        }
    }

    return (
        <footer className={styles.footer}>
            <section className={styles.footerMain}>
                <div className={styles.footerSub}>
                    <h1 className={styles.footerSubTitle}>Subscribe for new content</h1>
                    <p className={styles.footerSubDescrip}>Be the first to receive content and more content I do not post here</p>
                </div>
                {subscribed ? 
                    <div className={styles.footerSubin}>
                        <h2 className={styles.footerSubinThank}>Thank you for subscribing</h2>
                    </div>:
                    <div className={styles.footerSubin}>
                        <span className={styles.footerSubinMail}>Email</span>
                        <div style={{width: "100%", display: "flex", alignItems: "center", gap: ".5rem"}}>
                            <input required 
                                className={styles.footerSubinInput} 
                                type="email" 
                                placeholder="Enter your email" 
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <button className={styles.footerSubinButton} onClick={submitEmail}>Subscribe</button>
                        </div>
                        <span className={styles.footerSubinError}>{error}</span>
                    </div>
                }
            </section>
            <section className={styles.footerBottom}>
                <p className={styles.footerBottomLearn}>Learn new things</p>
                <Link href="/" className={styles.authNavLogo}>
                    <LogoSvg />
                    <span className={styles.authNavLogoText}>
                        cont.
                        <span className={styles.authNavLogoTextSpan}>awo</span>
                    </span>
                </Link>
                <p className={styles.footerBottomRights}>@2023. All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer;