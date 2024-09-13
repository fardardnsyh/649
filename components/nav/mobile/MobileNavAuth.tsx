"use client";

/* eslint-disable @next/next/no-img-element */
import LogoSvg from "@/svg/LogoSvg";
import Link from "next/link";
import userImage from "@/assets/logo.jpg";
import styles from "@/styles/nav/MobileNav.module.css";
import { useRouter } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineContacts } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavContext } from "@/context/NavContext";
import { usePathname } from "next/navigation";

const MobileNavAuth = () => {
    const route = usePathname();
    const router = useRouter();
    const [userProfileImage, setUserProfileImage] = useState<string>("");
    const {setToggle} = useContext(NavContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.photoURL) {
                setUserProfileImage(user?.photoURL)
            }
        })
    }, [])

    const signOutUser = () => {
        signOut(auth).then(() => {
            router.push("/")
        })
    }

    return (
        <nav className={styles.mbNav}>
            <Link href="/" className={styles.mbNavLogo} onClick={() => setToggle(false)}>
                <LogoSvg />
                <span className={styles.mbNavLogoText}>
                    cont.
                    <span className={styles.mbNavLogoTextSpan}>awo</span>
                </span>
            </Link>
            <div className={styles.mbNavMain}>
                <div className={styles.mbNavMainLinks}>
                    <Link 
                        className={`${styles.authNavMenuLink} 
                        ${route.toString() === "/"? styles.authNavMenuLinkActive : ""}`} 
                        href="/"
                        onClick={() => setToggle(false)}
                        >
                            <AiOutlineHome className={styles.authNavMenuLinkIcon} />
                            Home
                        </Link>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/blogs"? styles.authNavMenuLinkActive : ""}`} 
                        href="/blogs"
                        onClick={() => setToggle(false)}
                        >
                            <TfiWrite className={styles.authNavMenuLinkIcon} />
                            Blogs
                    </Link>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/contact"? styles.authNavMenuLinkActive : ""}`} 
                        href="/contact"
                        onClick={() => setToggle(false)}
                        >
                            <MdOutlineContacts className={styles.authNavMenuLinkIcon} />
                            Contact
                    </Link>
                </div>
                <div className={styles.mbNavAuth}>
                    <img 
                        src={(userProfileImage === "") ? `${userImage}` : userProfileImage }
                        alt="user" 
                        width={35} 
                        height={35} 
                        style={{borderRadius: "50%"}}
                    />
                    <p className={styles.mbNavAuthText} onClick={signOutUser}>Logout</p>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavAuth;