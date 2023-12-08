import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

   const rules = [
    {
      id: 1,
      name:"rule1",
      text:"First Rule! Do your best! :D"
    },
    {
      id: 2,
      name:"rule2",
      text:"Second Rule! Answer each question to the best of your ability!"
    },
    {
      id: 3,
      name:"rule3",
      text:"Third Rule! There is no time limit because I simply cannot be asked coding that in right now :P"
    },
    {
      id: 4,
      name:"rule4",
      text:"Fourth and final rule, have fun!"
    }
  ]

  function displayRules(){
    
      for(let i = 0; i < rules.length; i++){
      console.log(rules[i].text)}
    
  }

  return (
    <>
      <h1>My Name is Nicolas Alonzo</h1>
      <h3>This is my personal test for you</h3>
      <p>For any person playing this amazing and totally not broken quiz here are the rules. Press this button to make them ✨ appear ✨</p>
      <button onClick={displayRules}>Button</button>
          
        
    </>
  )
}

export default App
