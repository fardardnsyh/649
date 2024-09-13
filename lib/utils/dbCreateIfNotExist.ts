import { db } from "@/firebase/firebaseConfig"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"

const dbCreateIfNotExists = async (key: string) => {
    const itemRef = doc(db, "posts", `${key}`);
    const docSnap = await getDoc(itemRef);

    if (!docSnap.exists()) {
        const docRef = collection(db, "posts")
        setDoc(doc(docRef, `${key}`), {likes: 0})
    }
}

export default dbCreateIfNotExists;