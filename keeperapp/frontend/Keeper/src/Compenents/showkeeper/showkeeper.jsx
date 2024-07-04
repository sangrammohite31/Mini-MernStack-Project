import React from 'react'
import "./showkeeper.css"
function ShowKeeper({keeperlist}) {
  return (
    <div className='showKeeper'>

        {
            keeperlist.map((keeper,index)=>(
                <div className='keepercard'>
                <h1 className='title'>
                    {keeper.title}
                </h1>
    
                <textarea className='descriptionbox'value="Description"/>
            </div>
            ))
        }
      
      
    </div>
  )
}

export default ShowKeeper