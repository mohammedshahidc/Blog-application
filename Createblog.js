import React, { useContext, useState } from 'react'
import { userContext } from './Context'
// import Blogs from './Blogs'
import { useNavigate } from 'react-router-dom'


const Createblog = () => {
    const [title, setTitle] = useState('')
    const [body,setBody]=useState('')
    const { addblogs } = useContext(userContext)
    const navigate =useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault();
        const newblog = { title, body}
        setTitle('')
        setBody('')
        addblogs(newblog)
    }
    


    return (
        <div className='page'>
            <div className='main'>
                <h1>Create blogs</h1>
                <form onSubmit={handlesubmit}>
                    <label>Title:</label>
                    <input type='text' placeholder='title' id='tit' value={title} onChange={(e) =>{setTitle(e.target.value) }} /><br />
                    <div className='bo'>
                        <label>Body:</label>
                        <textarea placeholder='body' id='bod' value={body} onChange={(e)=>{setBody(e.target.value)}} />
                    </div>
                    <button className='btn' type='submit'>Create blog</button>
                    <button className='btn' onClick={()=>navigate ('/Blogs')}>Blogs</button>
                </form>
                
            </div>

        </div>
    )
}

export default Createblog
