import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 5;
  // let addValue = () => {
  //   console.log(`COunter vlaue :- ${counter}`)
  //   counter++;
  // }

  let [count, setCount] = useState(0);
  let incrementCounter = () => {
    setCount(++count)
  }
  let decrementCounter = () => {
    if(count === 0) {
      return alert(`Count can't be negative`)
    }
    setCount(--count)
  }

  return (
    <>
      <h2>Code With Chai</h2>
      <h3>Counter : {count}</h3>
      <button onClick={incrementCounter}>Add Value </button>
      <br />
      <button onClick={decrementCounter}>Remove Value </button>
    </>
  )
}

export default App
