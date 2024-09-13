"use client";

import { useContext, useEffect, useState } from "react";
import MobileNavAuth from "@/components/nav/mobile/MobileNavAuth";
import MobileNavUnauth from "@/components/nav/mobile/MobileNavUnauth";
import { motion, useAnimation } from "framer-motion";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { NavContext } from "@/context/NavContext";

const MobileNav = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const {toggle} = useContext(NavContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        })
    }, [])

    const animateNav = useAnimation();

    useEffect(() => {
        if(toggle) {
            animateNav.start({
                opacity: 1,
                x: 0,
                transition: {type: "spring", stiffness: 30, duration: .5}
            })
        } else {
            animateNav.start({
                opacity: 0,
                x: "-100vw",
                transition: {type: "spring", stiffness: 30, duration: .5}
            })
        }
    }, [animateNav, toggle])

    return (
        <motion.div animate={animateNav} style={{
            width: "100vw", 
            display: `${toggle ? "flex" : "none"}`, 
            height: "100vh", 
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 20,
            background: "none"
        }}>
            {authenticated ? <MobileNavAuth /> : <MobileNavUnauth />}
        </motion.div>
    )
}

export default MobileNav;