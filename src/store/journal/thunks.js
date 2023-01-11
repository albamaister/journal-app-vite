import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote } from "./journalSlice"

export const startNewNote =() => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const docRef = collection(firebaseDB, `${uid}/jornal/notes`);
            const newDoc = await addDoc(docRef, newNote)
            newNote.id = newDoc.id
            dispatch( addNewEmptyNote(newNote) )
            dispatch( setActiveNote(newNote) )
        } catch(error) {
            console.log(error)
        }

        

        //dispatchne
        //dispatch(newNote)
        //dispatch(activarNote)

    }
}