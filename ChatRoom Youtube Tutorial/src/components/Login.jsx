import React from 'react'
import { auth } from '../../libs/firebase-config'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export const Login = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(result =>{
            console.log("Sign in succesfully!")
        }).catch(error => {
            console.log(error.message)
        })
    }

  return (
    <button onClick={signInWithGoogle}>Sign in with google</button>
  )
}

