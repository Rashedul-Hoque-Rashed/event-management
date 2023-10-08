import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
        })
        return () => unsubscribe();
    },[])



    const authInfo = {
        user,
        googleLogin,
        githubLogin,
        login,
        singUp,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;