import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email, photoURL, uid } = result.user
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false
        }
    }
}


export const registerUserWithEmailAndPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)

        const { uid, photoURL } = resp.user

        await updateProfile(firebaseAuth.currentUser, { displayName })
        return { ok: true, uid, photoURL, email, displayName  }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailAndPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)

        const { uid, photoURL, displayName } = resp.user

        return { ok: true, uid, photoURL, email, displayName  }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await firebaseAuth.signOut()
}