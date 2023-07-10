import React from 'react'
import { useState, useEffect } from 'react';
import {getDocs,collection, deleteDoc,doc} from "firebase/firestore"
import {db,auth} from "../firebase-config"


const Home = ({isAuth}) => {
 
  const [postLists , setPostLists]= useState([]);

  const postCollectionRef= collection(db, "posts"); 
  const [randstate, setRandstate] = useState(0); 
  const deletePost= async(id)=>{
    
    const postDoc=doc(db,"posts", id);
    await deleteDoc(postDoc);
    setRandstate(randstate+1);
    
    // window.location.reload();
};

  useEffect(()=>{
    const getPosts= async()=>{
      const data= await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc)=>({ ...doc.data(), id:doc.id}))); 
    };
    getPosts();
  },[randstate]);

  return (
    <div  className='homePage'>
      {postLists.map((post)=>{
        return (
           <div className='post'> 
             <div className='postHeader'>
               <div className='title'> 
                <h1>{post.title}</h1>
               </div>
               <div className='deletePost'>
               { isAuth && post.author.id===auth.currentUser.uid && (<button onClick={()=>{
                  deletePost(post.id);
                }}> 
                &#128465; </button>)}
               </div>
               
             </div>
             
             <div className='postTextContainer'>
              {post.postText}
              <h3>@{post.author.name}</h3>
             </div>
            </div>)
      })

      }
           
    </div>
  )
}

export default Home
