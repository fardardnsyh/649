"use client";

import { auth } from "@/firebase/firebaseConfig";
import styles from "@/styles/Signup.module.css";
import GitHubComp from "@/svg/icons/GitHubComp";
import GoogleComp from "@/svg/icons/GoogleComp";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupMain() {
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
        <main className={styles.signup}>
            <div className={styles.signupContent}>
                <h1 className={styles.signupContentText}>Sign up</h1>
                <div className={styles.signupButton} onClick={signUpWithGoogle}>
                    <span className={styles.signupButtonText}>Signup with</span>
                    <span className={styles.signupButtonIcon}><GoogleComp /></span>
                </div>
                <div className={styles.signupButton} onClick={signUpWithGithub}>
                    <span className={styles.signupButtonText}>Signup with</span>
                    <span className={styles.signupButtonIcon}><GitHubComp /></span>
                </div>
                <p className={styles.signupPrompt}>
                    Already have a account? 
                    <Link className={styles.signupPromptLink} href="/signin">Sign in</Link>
                </p>
                <div className={styles.opac}></div>
            </div>
            <h2 className={styles.signupText}>Welcome, nice to have <span>you</span> here</h2>
        </main>
    )
}