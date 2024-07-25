import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // this is hook we are using from usesate react 
 let [counter , setcounter]=  useState(6)
  //let counter= 6
  // this is an arrow funtion 
  const addValue =()=>{

counter =counter +1;
console.log("clicked ",counter);
setcounter(counter);


}
const remove = () =>{


  counter =counter - 1;
  console.log("clicked ",counter);
  setcounter(counter);

  }
  return (
    <>
    
   <h1>
    REACT WITH SHADAB:|
   </h1>
   <h2>counter value {counter}</h2>
   <button onClick={addValue}>Add value{counter}</button>
   <button onClick={remove}>Remove value{counter}</button>
    </> 
  )
}

export default App
