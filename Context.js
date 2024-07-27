import React, {createContext,useState}from 'react'
import Blogs from './Blogs'



export const userContext=createContext()
const Context = ({children}) => {
    const [blogs,setBlogs]=useState([])
    const addblogs =(blog)=>{setBlogs([...blogs,blog])}
    console.log(blogs)
 
  return (
    <div>
      <userContext.Provider value={{blogs,addblogs}}>
      {children}

      </userContext.Provider>
    </div>
  )
}

export default Context
