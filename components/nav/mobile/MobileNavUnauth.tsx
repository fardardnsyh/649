"use client";

import LogoSvg from "@/svg/LogoSvg";
import Link from "next/link";
import styles from "@/styles/nav/MobileNav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineContacts } from "react-icons/md";
import {VscSignIn} from "react-icons/vsc";
import { NavToggle } from "@/types/allTypes";
import { useContext } from "react";
import { NavContext } from "@/context/NavContext";
import { usePathname } from "next/navigation";

const MobileNavUnauth = () => {
    const route = usePathname();
    const {setToggle} = useContext(NavContext);

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
                        href="/" onClick={() => setToggle(false)}>
                            <AiOutlineHome className={styles.authNavMenuLinkIcon} />
                            Home
                        </Link>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/blogs"? styles.authNavMenuLinkActive : ""}`} 
                        href="/blogs" onClick={() => setToggle(false)}>
                            <TfiWrite className={styles.authNavMenuLinkIcon} />
                            Blogs
                    </Link>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/contact"? styles.authNavMenuLinkActive : ""}`} 
                        href="/contact" onClick={() => setToggle(false)}>
                            <MdOutlineContacts className={styles.authNavMenuLinkIcon} />
                            Contact
                        </Link>
                </div>
                <div className={styles.mbNavBottom}>
                    <Link 
                        className={`${styles.authNavMenuLink}
                        ${route.toString() === "/signin"? styles.authNavMenuLinkActive : ""}`} 
                        href="/signin" onClick={() => setToggle(false)}>
                            <VscSignIn />
                            SignIn
                        </Link>
                    <span
                        className={`${styles.authNavSignup}
                        ${route.toString() === "/signup"? styles.authNavSignupActive : ""}`} 
                    >
                        <Link href="/signup" onClick={() => setToggle(false)}>SignUp</Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavUnauth;