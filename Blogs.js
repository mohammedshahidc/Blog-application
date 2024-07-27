import React, { useContext } from 'react'
import { userContext } from './Context'
import { Link } from 'react-router-dom'

const Blogs = () => {
   const {blogs}=useContext(userContext)
  return (
<>
    <div className='title' >
       
            {blogs.map((blog,index)=>(
                 <div className='blg' key={index}>
                  <h1 id='link'><Link to={'/Blogdt'}>{blog.title}</Link></h1>
                 
                    </div>))}

        


        

    
    </div>
</>
  )
}

export default Blogs
