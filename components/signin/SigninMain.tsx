"use client";

import { auth } from "@/firebase/firebaseConfig";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import styles from "@/styles/Signin.module.css";
import Link from "next/link";
import GitHubComp from "@/svg/icons/GitHubComp";
import GoogleComp from "@/svg/icons/GoogleComp";

export default function SigninMain() {
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const router = useRouter();

    const signUpWithGoogle = () => {
        signInWithPopup(auth, providerGoogle).then((res) => {
            router.back();
        })
    }

    const signUpWithGithub = () => {
        signInWithPopup(auth, providerGithub).then((res) => {
            router.back();
        })
    }

    return (
        <main className={styles.signin}>
            <div className={styles.signinContent}>
                <h1 className={styles.signinContentText}>Sign in</h1>
                <div className={styles.signinButton} onClick={signUpWithGoogle}>
                    <span className={styles.signinButtonText}>Signin with</span>
                    <span className={styles.signinButtonIcon}><GoogleComp /></span>
                </div>
                <div className={styles.signinButton} onClick={signUpWithGithub}>
                    <span className={styles.signinButtonText}>Signin with</span>
                    <span className={styles.signinButtonIcon}><GitHubComp /></span>
                </div>
                <p className={styles.signinPrompt}>
                    Do not have a account? 
                    <Link className={styles.signinPromptLink} href="/signup">Sign up</Link>
                </p>
                <div className={styles.opac}></div>
            </div>
            <h2 className={styles.signinText}>Good to have <span>you</span> back</h2>
        </main>
    )
}