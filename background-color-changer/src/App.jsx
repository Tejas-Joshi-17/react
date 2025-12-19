import { useState } from 'react'
function App() {
  const [color, setColor] = useState('white')

  const changeColor = (color) => {
    setColor(color);
  }

  return (
    <div className='w-100 vh-100' style={{backgroundColor: color}}>
      <button type="button" className="btn btn-danger m-2" onClick={() => changeColor('red')}>Primary</button>
      <button type="button" className="btn btn-primary m-2" onClick={() => changeColor('blue')}>Secondary</button>
      <button type="button" className="btn btn-success m-2" onClick={() => changeColor('green')}>Success</button>
    </div>
  )
}

export default App;