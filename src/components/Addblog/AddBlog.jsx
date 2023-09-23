
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, projectAuth } from "../../firebase/config"; //my authentication context

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    Author: "",
    Title: "",
    Body: "",
  });
  const [editingBlog, setEditingBlog] = useState(null);

  const user = projectAuth.currentUser; // dis targe current user

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
    addDoc(blogsCollRef, { ...newBlog, userId: user.uid })
      .then(response => {
        console.log("Blog post added:", response);

        // Clearing my input fields after a successful submission
        setNewBlog({
          Author: "",
          Title: "",
          Body: "",
        });
        // Refreshing the blog list
        getBlogs();
      })
      .catch(error => {
        console.error("Error adding blog post:", error.message);
      });
  }

  function handleEditClick(blog) {
    setEditingBlog(blog);
    setNewBlog(blog.data); // adding the existing data to form
  }

  function handleEditBlog() {
    if (!editingBlog) return;

    const blogDocRef = doc(db, "blogs", editingBlog.id);
    if (editingBlog.data.userId === user.uid) {
      updateDoc(blogDocRef, newBlog)
        .then(() => {
          console.log("Blog post edited successfully");
          setEditingBlog(null);
          setNewBlog({
            Author: "",
            Title: "",
            Body: "",
          });
          getBlogs();
        })
        .catch(error => {
          console.error("Error editing blog post:", error.message);
        });
    } else {
      console.log("You don't have permission to edit this blog post.");
    }
  }

  function handleDeleteBlog(blogId) {
    const blogDocRef = doc(db, "blogs", blogId);
    const blog = blogs.find(b => b.id === blogId);

    if (blog.data.userId === user.uid) {
      deleteDoc(blogDocRef)
        .then(() => {
          console.log("Blog post deleted successfully");
          getBlogs();
        })
        .catch(error => {
          console.error("Error deleting blog post:", error.message);
        });
    } else {
      console.log("You don't have permission to delete this blog post.");
    }
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
          {user && user.uid === blog.data.userId && (
            <div>
              <button onClick={() => handleEditClick(blog)}>Edit</button>
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}

      <h2>Add/Edit Blog</h2>
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

        {editingBlog ? (
          <button type="button" onClick={handleEditBlog}>
            Save Changes
          </button>
        ) : (
          <button type="button" onClick={handleAddBlog}>
            Add Blog Post
          </button>
        )}
      </form>
    </div>
  );
}

