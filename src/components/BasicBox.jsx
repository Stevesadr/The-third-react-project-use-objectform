import React from 'react'
import Boxs from './Boxs'

const BasicBox = ({name , count}) => {
  const ar1=[{Myname:name,MyCount:count}]
  return (
    <div className='main-box'>
      {
        ar1.map((item)=>{
          return <Boxs name={item.Myname} count={item.MyCount}/> 
        })
      }
      {/* <Boxs name={name} count={count}/> */}

    </div>
  )
}

export default BasicBox