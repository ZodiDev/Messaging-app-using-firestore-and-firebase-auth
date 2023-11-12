import { useEffect, useState } from 'react'
import { Login } from './components/Login'
import { Chatroom } from './components/Chatroom'
import { auth } from '../libs/firebase-config'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      setUser(user);
    })
    return unsubscribe;
  }, [])

  return (
    <>
      {user ? <Chatroom user={user} /> : <Login />}
    </>
  )
}

export default App
