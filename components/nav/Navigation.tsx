"use client";

import NavigationAuthenticated from "@/components/nav/desktop/NavigationAuthenticated";
import NavigationUnauthenticated from "@/components/nav/desktop/NavigationUnauthenticated";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from "react";

const Navigation = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        })
    }, [])

    return (
        <div style={{width: "100%"}}>
            {authenticated ? <NavigationAuthenticated /> : <NavigationUnauthenticated />}
        </div>
    )
}

export default Navigation;