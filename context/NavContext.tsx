"use client";

import { NavType } from "@/types/allTypes";
import { createContext, useEffect, useState } from "react";

export const NavContext = createContext<NavType>({
    toggle: false,
    setToggle: () => {}
})

const NavContextProvider = ({children} : {children: React.ReactNode}) => {
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const showNav = localStorage.getItem("showNav");
            if (showNav) {
                setToggle(JSON.parse(showNav));
            }
          }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('showNav', JSON.stringify(toggle));
          }
    }, [toggle])

    return (
        <NavContext.Provider value={{toggle, setToggle}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;