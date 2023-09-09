{/*import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/config"
import './index.css'


function AddBlog() {
    const {blog, setBlog}=useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(blog===''){
            return
        }
        const blogsCollRef=collection(db, 'blogs')
        addDoc(blogsCollRef, {blog:blog})
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
  return (
    <div className="AddBlog-container">
        <h2>AddBlog</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="blog">blog name</label>
            <input 
            id='blog'
            placeholder="write your blog"
            type='text' 
            value={blog}
            onChange={e=> setBlog(e.target.value)}
            />
            <button type="submit">Add blog post</button>
        </form>
        </div>
  )
}

export default AddBlog*/}

import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    Author: "",
    Title: "",
    Body: "",
  });

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  function getBlogs() {
    const blogCollectionRef = collection(db, 'blogs');

    getDocs(blogCollectionRef)
      .then(response => {
        const blgs = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }));
        setBlogs(blgs);
      })
      .catch(error => console.log(error.message));
  }

  function handleAddBlog() {
    const blogsCollRef = collection(db, 'blogs');
    addDoc(blogsCollRef, newBlog)
      .then(response => {
        console.log("Blog post added:", response);
        // Clear the input fields after a successful submission
        setNewBlog({
          Author: "",
          Title: "",
          Body: "",
        });
        // Refresh the blog list
        getBlogs();
      })
      .catch(error => {
        console.error("Error adding blog post:", error.message);
      });
  }

  return (
    <div>
      <h1>Latest Blogs</h1>
      <button onClick={() => getBlogs()}>Refresh blog</button>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>Written by: {blog.data.Author}</h2>
          <h3>Title: {blog.data.Title}</h3>
          <p>{blog.data.Body}</p>
        </div>
      ))}

      <h2>Add a New Blog</h2>
      <form>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={newBlog.Author}
          onChange={e => setNewBlog({ ...newBlog, Author: e.target.value })}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={newBlog.Title}
          onChange={e => setNewBlog({ ...newBlog, Title: e.target.value })}
        />

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          value={newBlog.Body}
          onChange={e => setNewBlog({ ...newBlog, Body: e.target.value })}
        />

        <button type="button" onClick={handleAddBlog}>
          Add Blog Post
        </button>
      </form>
    </div>
  );
}
