import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import {addDoc ,collection  } from "firebase/firestore"
import {db,auth} from "../firebase-config"

const CreatePost = () => {
    
    const [title, setTitle]= useState("")
    const [postText, setPostText]= useState("")

    const postCollectionRef= collection(db, "posts"); 
    let navigate=useNavigate();

    const createPost = async()=>{
        await addDoc(postCollectionRef,{title, postText, author: {name:auth.currentUser.displayName , id:auth.currentUser.uid}} )

        navigate("/");
    }


  return (
    <div className='createPostPage'>
       <div className='cpContainer'>
        <h1>create post</h1>
        <div className='inputGp'>
            <label> Title:</label>
            <input placeholder='Title..' 
            onChange={(e)=>{
                setTitle(e.target.value);
            }}/>
        </div>
        <div className='inputGp'>
            <label> Post:</label>
            <textarea placeholder='Post'
            onChange={(e)=>{
                setPostText(e.target.value);
            }}/>
        </div>
        <button onClick={createPost }> Submit Post</button>

       </div>
    </div>
  )
}

export default CreatePost
