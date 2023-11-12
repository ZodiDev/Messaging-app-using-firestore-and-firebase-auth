import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDuGAq9LN9Idfntnp5_pn5lhv8dIvSZbmI",
  authDomain: "chatroom-authentication.firebaseapp.com",
  projectId: "chatroom-authentication",
  storageBucket: "chatroom-authentication.appspot.com",
  messagingSenderId: "484392155130",
  appId: "1:484392155130:web:49c16552e633e7f719d643"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);