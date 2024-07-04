import React from 'react'
import { useState } from 'react';
import "./addkeeper.css"
import axios from "axios";
function Addkeeper({setkeeperlist}) {
    const [keeperObj, setKeeperObj] = useState({
        title:"",
        description:""
    })

    const handleChange =e=>{
        const {name,value}=e.target;
        setKeeperObj({...keeperObj,[name]:value})
    }

    const add=()=>{
        if(keeperObj.title){
            axios.post('http://localhost:3000/api/addNew',keeperObj).then(res=>setkeeperlist(res.data.keeper))
        }
    }
  return (
    <div className='addKeeper'>
        <input
        className='inputBox titleInput'
        type='text'
        name='title'
        autoComplete='off'
        placeholder='Add Title'
        onChange={handleChange}
        value={keeperObj.title}
        />
        <textarea
        className='inputBox description'
        placeholder='Add Description'
        name='description'
        onChange={handleChange}
        value={keeperObj.description}
        
        />
        <div className='addButton' onClick={add}>Add</div>


    </div>
  )
}

export default Addkeeper