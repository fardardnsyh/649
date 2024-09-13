"use client";

import { AppType } from "@/types/allTypes";
import { createContext, useState } from "react";

export const AppContext = createContext<AppType>({
    search: "",
    setSearch: () => {},
    filterString: "",
    setFilterString: () => {},
})

const AppContextProvider = ({children} : {children: React.ReactNode}) => {
    const [search, setSearch] = useState<string>("");
    const [filterString, setFilterString] = useState<string>("All");

    const values = {
        search, setSearch, filterString, setFilterString
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;