
{/*
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"



export default function ListBlogs(){

    const [blogs,setblogs]=useState ([])

    useEffect(()=>{
        getBlogs()
    },[])

useEffect(()=>{
    console.log(blogs)
}, [blogs])



    function getBlogs(){
        const blogCollectionRef=collection(db, 'blogs')

        getDocs(blogCollectionRef)
        .then(response=>{

            const blgs=response.docs.map(doc=>({
                data:doc.data(), 
                id:doc.id,
            }))
            setblogs(blgs)

        })


        .catch(error=>console.log(error.message))


    }

    return(
        <div>
            <h4>Latest Blogs</h4>
            <button onClick={()=>getBlogs}>Refresh blog</button>
            
                
                {blogs.map(blog=>(
                <h5 key={blog.id}>{blog.data.Author}</h5>
                
                ))}
                 {blogs.map(blog=>(
                <h6 key={blog.id}>{blog.data.Title}</h6>
                
                ))}
                 {blogs.map(blog=>(
                <p key={blog.id}>{blog.data.Body}</p>
                
                ))}

                
            </div>
    )
}
*/}

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div>
      <h1>Latest Blogs</h1>
      <button onClick={() => getBlogs()}>Refresh blog</button>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>Writing by: {blog.data.Author}</h2>
          <h3>Title: {blog.data.Title}</h3>
          <p>{blog.data.Body}</p>
        </div>
      ))}
    </div>
  );
}
