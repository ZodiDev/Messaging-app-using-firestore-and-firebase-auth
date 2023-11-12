import React, { useEffect, useState } from 'react'
import {firestore, auth} from '../../libs/firebase-config'
import {collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp} from 'firebase/firestore'

export const Chatroom = () => {
    const [message, setMessage] = useState([]);
    const [newMesage, setNewMessage] = useState('');

    useEffect(() =>{
        const messageRef = collection(firestore, "messages")
        const q = query(messageRef, orderBy("createdAt"), limit(25))

        const unsubscribe = onSnapshot(q, snapshop => {
            const msgs = snapshop.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setMessage(msgs)
        });

        return unsubscribe;
    },[])

    const sendMessage = async (e) =>{
        e.preventDefault()

        if(!newMesage.trim()) return;

        await addDoc(collection(firestore, "messages"),{
            text: newMesage,
            createdAt: serverTimestamp(),
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName
        });

        setNewMessage('');
    } 

  return (
    <>
    <div className='chat-container'>
        {message.map(msg =>(
            <div key={msg.id} className={`message ${msg.uid === auth.currentUser.uid ? 'my-message' : 'other-message'}`}>
                {msg.text}
            </div>
        ))}
        <div className='input-area'>
            <form onSubmit={sendMessage}>
                <input value={newMesage} onChange={e => setNewMessage(e.target.value)}/>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}
