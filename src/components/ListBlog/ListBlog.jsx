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
            <h4>List Blogs</h4>
                {/*<ul>
                {blogs.map(blog=>(
                <li key={blog.id}>{blog.data.name}</li>
                ))}
                </ul>*/}
                
                {blogs.map(blog=>(
                <p key={blog.id}>{blog.data.Author}</p>
                
                ))}
                 {blogs.map(blog=>(
                <p key={blog.id}>{blog.data.Title}</p>
                
                ))}
                 {blogs.map(blog=>(
                <p key={blog.id}>{blog.data.Body}</p>
                
                ))}
                
            </div>
    )
}