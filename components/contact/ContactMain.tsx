"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Contact.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

type FormValues = {
    name: string,
    mail: string,
    message: string
}

export default function ContactMain() {
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        mail: "",
        message: ""
    })
    const [text, setText] = useState<React.ReactNode>(
        <>I would <span>love</span> to hear from you</>
    )

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFormValues({...formValues, name: `${user.displayName}`, mail: `${user.email}`})
                setText(<>I would <span>love</span> to hear from you <span>{user.displayName?.split(" ")[0].toLowerCase()}</span></>)
            } else {
                setFormValues({name: "", mail: "", message: ""})
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (formValues.name === "") {
            setText(<>Oops, <span>please</span> enter your <span>name.</span></>)
            return
        }
        if (formValues.mail === "") {
            setText(<>Oops, <span>please</span> enter your <span>email.</span></>)
            return
        }
        if (formValues.message === "") {
            setText(<>Oops, <span>please</span> enter your <span>message.</span></>)
            return
        }
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]*$/
        if (formValues.mail.match(validRegex)) {
            const contactRef = collection(db, "contacts");
            addDoc(contactRef, {...formValues, sentTime: Timestamp.now()}).then(() => {
                setText(<>Hooray sent! <span>Nice</span> to meet you <span>{formValues.name}</span></>)
                setFormValues({name: "", mail: "", message: ""})
            }).catch(() => {
                setText(<>Eish, form <span>not submitted</span>not submitted. Please try again.</>)
            })
        } else {
            setText(<>Please enter a <span>valid</span> email.</>)
        }
    }

    return (
        <main className={styles.contact}>
            <div className={styles.contactContent}>
                <form className={styles.contactForm}>
                    <h1 className={styles.contactFormTitle}>Let us talk</h1>
                    <div className={styles.contactInput}>
                        <input 
                            type="text"
                            className={styles.contactInputText} 
                            onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                            value={formValues.name}
                            placeholder="Enter your name..." />
                        <MdOutlineDriveFileRenameOutline className={styles.contactInputIcon} />
                    </div>
                    <div className={styles.contactInput}>
                        <input 
                            type="email" 
                            className={styles.contactInputText}
                            onChange={(e) => setFormValues({...formValues, mail: e.target.value})}
                            value={formValues.mail}
                            placeholder="Enter your email..." />
                        <AiOutlineMail className={styles.contactInputIcon} />
                    </div>
                    <textarea 
                        className={styles.contactTextarea}
                        onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                        value={formValues.message}
                        placeholder="Enter your message..." />
                    <button onClick={submitForm} type="submit" className={styles.contactButton}>Send message</button>
                </form>
                <div className={styles.opac}></div>
            </div>
            <h2 className={styles.contactText}>{text}</h2>
        </main>
    )
}