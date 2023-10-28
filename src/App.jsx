import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <h1> Counter :{count}</h1>
     <button onClick={()=> setCount(count+1)}>add</button>
     <p>Current Value : {count}</p>
    </>
  )
}

export default App
