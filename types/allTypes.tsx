import { Timestamp } from "firebase/firestore"

export type UserInfo = {
    name: string,
    image: string
}

export type NavToggle = {
    toggle: boolean
}

export type CommentType = {
    photoURL: string,
    fullname:  string,
    commentText: string,
    time: Timestamp
}

export type CommentsType = {
    commentsList: Array<CommentType>,
    title: string
}

export type NavType = {
    toggle: boolean,
    setToggle: (toggle: boolean) => void
}

export type AppType = {
    search: string,
    setSearch: (search: string) => void,
    filterString: string,
    setFilterString: (filterString: string) => void
}