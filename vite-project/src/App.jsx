import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' //External CSS

function App() { //function creation
  let name = "Ashwin Annamalai"
  
  const infoDetails={  //object calling 
    name: "Ashwin Annamalai Lena",
    age: 20,
    dept: "M.tech CSE"
  }
  //print -> alert or console.log
  alert(`my name is ${infoDetails.name}`)
  console.log(`My age is ${infoDetails.age}`)

  // return somthing
  return ( 
    // browser display
    <>
      <h1 style={{textAlign:"center"}}>My Department is {infoDetails.dept}</h1>  {/*inline style*/} 
      
      {/* <h1 style={rStyle}>Ashwin</h1> 
       internal style  */}
      {/* <h1>{infoDetails.name}</h1> */}
      {/* <p>my name is {name}</p> */}
      <p className='infoDetailsStyles'>Name: {infoDetails.name}<br/>  {/* external css */}
      
        Age: {infoDetails.age}<br/>
        Department: {infoDetails.dept}<br/>
      </p>
    </>
  )
}

export default App

