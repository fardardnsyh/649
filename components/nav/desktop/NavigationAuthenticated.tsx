"use client";

/* eslint-disable @next/next/no-img-element */
import LogoSvg from "@/svg/LogoSvg";
import Link from "next/link";
import userImage from "@/assets/logo.jpg";
import styles from "@/styles/nav/AuthNav.module.css";
import {GiHamburgerMenu} from "react-icons/gi";
import MobileNav from "@/components/nav/MobileNav";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavContext } from "@/context/NavContext";
import { usePathname, useRouter } from "next/navigation";

const NavigationAuthenticated = () => {
    const route = usePathname();
    const router = useRouter();
    const [userProfileImage, setUserProfileImage] = useState<string>("");
 
    const {toggle, setToggle} = useContext(NavContext);

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
        <nav className={styles.authNav}>
            <Link href="/" className={styles.authNavLogo}>
                <LogoSvg />
                <span className={styles.authNavLogoText}>
                    cont.
                    <span className={styles.authNavLogoTextSpan}>awo</span>
                </span>
            </Link>
            {
                toggle ?
                <IoMdClose className={styles.authNavToggle} onClick={() => setToggle(false)} /> :
                <GiHamburgerMenu className={styles.authNavToggle} onClick={() => setToggle(true)} />
            }
            <div className={styles.authNavMenu}>
                <div className={styles.authNavMenuLinks}>
                    <Link 
                        className={`${styles.authNavMenuLink} 
                        ${route.toString() === "/"? styles.authNavMenuLinkActive : ""}`} 
                        href="/">Home</Link>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/blogs"? styles.authNavMenuLinkActive : ""}`} 
                        href="/blogs">Blogs</Link>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/contact"? styles.authNavMenuLinkActive : ""}`} 
                        href="/contact">Contact</Link>
                </div>
            </div>
            <div className={styles.authNavMenuSide}>
                <p className={styles.logoutButton} onClick={signOutUser}>Logout</p>
                <img 
                    src={(userProfileImage === "") ? `${userImage}` : userProfileImage } 
                    alt="user" 
                    width={35} 
                    height={35} 
                    style={{borderRadius: "50%"}}
                />
            </div>
            <MobileNav />
        </nav>
    )
}

export default NavigationAuthenticated;