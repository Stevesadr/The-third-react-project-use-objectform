import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BasicBox from './components/BasicBox'

function App() {
  const [count, setCount] = useState(0)
  const RestAPI=[
    {name:"laptop" , count:0},
    {name:"mobile" , count:0},
    {name:"tablet" , count:0},
    {name:"camera" , count:0},
    {name:"console" , count:0},
    {name:"pc" , count:0},
  ]

  return (
    <div>
      {
        RestAPI.map((item)=>{
          return <BasicBox name={item.name} count={item.count}/>
        })
      }
      
    </div>
  )
}

export default App
