import React, { useState } from 'react'

const Boxs = ({name , count}) => {
    const [num , setNum]=useState(count)
    const plus=()=>{
        setNum(num+1);
    }
    const decrease=()=>{
        if(num > 0 ){
            setNum(num-1);
        }
    }
  return (
    <div className='show'>
        <div className='show-test'>
            <h2>{name}</h2>
        </div>
        <div className='show-test'>
            <h3>{num}</h3>
        </div>
        <div className='show-test'>
            <button onClick={plus}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    </div>
  )
}

export default Boxs