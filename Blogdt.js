import React, { useContext } from 'react'
import { userContext } from './Context'
import { useNavigate } from 'react-router-dom'


const Blogdt = () => {
    const {blogs}=useContext(userContext)
    const navigator=useNavigate()
  return (
    <div >
        {blogs.map((blog,index)=>(
            <div key={index} className='dt'>
                <h1>{blog.title}</h1>
                <h3>{blog.body}</h3>
                
        </div>))}
        <button className='btn' onClick={()=>navigator('/')}>go to home page</button>
      
    </div>
  )
}

export default Blogdt
