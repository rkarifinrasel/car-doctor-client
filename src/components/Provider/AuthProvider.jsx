import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const gProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setLoading(true)
return signOut(auth)
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,gProvider)
    }


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('onState Changed',currentUser)
            setLoading(false)
            if(currentUser && currentUser.email){
                const loggedUser={
                    email:currentUser.email
                  }
                  fetch('https://car-doctor-server-co4lgault-rkarifinrasel.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log('jwt response',data)
                    localStorage.setItem('car-access-token',data.token)
                  })
            }
            else{
                localStorage.removeItem('car-access-token')
            }
        })
        return ()=>{
            return unSubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        logout,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;