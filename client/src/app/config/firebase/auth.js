import {auth} from "./firebase-config.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}

const doSignInWithEmailAndPassword = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
 
const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;
}

const doSignOut = () => {
    return auth.signOut();
}

export { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut };
