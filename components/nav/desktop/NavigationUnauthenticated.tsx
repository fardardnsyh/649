"use client";

import LogoSvg from "@/svg/LogoSvg";
import {GiHamburgerMenu} from "react-icons/gi"
import Link from "next/link";
import styles from "@/styles/nav/AuthNav.module.css";
import { useRouter } from "next/router";
import MobileNav from "@/components/nav/MobileNav";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { NavContext } from "@/context/NavContext";
import { usePathname } from "next/navigation";

const NavigationUnauthenticated = () => {
    const route = usePathname();
    const {toggle, setToggle} = useContext(NavContext);

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
                <Link 
                    className={`${styles.authNavMenuLink}
                    ${route.toString() === "/signin"? styles.authNavMenuLinkActive : ""}`} 
                    href="/signin">SignIn</Link>
                <span
                    className={`${styles.authNavSignup}
                    ${route.toString() === "/signup"? styles.authNavSignupActive : ""}`} 
                >
                    <Link className={styles.authNavSignupLink} href="/signup">SignUp</Link>
                </span>
            </div>
            <MobileNav />
        </nav>
    )
}

export default NavigationUnauthenticated;