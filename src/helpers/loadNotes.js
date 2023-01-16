import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"

export const loadNotes = async( uid = '' ) => {
    if ( !uid ) throw new Error('El uid del usuario no existe')
    const collectionRef = collection(firebaseDB, `${uid}/jornal/notes`)
    const docs = await getDocs(collectionRef)
    let notes = []
    docs.forEach(doc => {
        notes = [...notes, { id: doc.id, ...doc.data() }]
    })
    return notes
}