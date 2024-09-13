"use client"

import NavContextProvider from "@/context/NavContext";
import Navigation from "./nav/Navigation";
import AppContextProvider from "@/context/AppContext";
import Footer from "./footer/Footer";
import { Fragment } from "react";

export default function LayoutMain({children}: {children: React.ReactNode}) {
    return (
        <section
            style={{
                maxWidth: 1200, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                height: "100vh",
                margin: "0 auto",
                position: "relative",
                justifyContent: "space-between"
            }}
        >
            <section style={{width: "100%"}}>
                <NavContextProvider>
                    <Navigation />
                </NavContextProvider>
                <AppContextProvider>
                    {children}
                </AppContextProvider>
            </section>
            <Footer />
        </section>
    )
}