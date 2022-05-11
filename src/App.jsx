import React, { useState } from 'react'
import './App.css'
import Boton from './modules/boton/Boton'

const App = () => {
  const [count, setCount] = useState(0)
  const datos = ['C', '()', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '−',
    '1', '2', '3', '+',
    '⁺∕₋', '0', '.', '=']
  const colors = ['#f76f69', '#9cd260', '#9cd260', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#fafafa']
  const backcolor = new Array(20).fill('#171717')
  backcolor.fill('#427e04', 19)

  console.log(backcolor)

  return (
    <div className="App">
      <div className="pantalla">
        {count}
      </div>
      <div className="gridcontainer">
        {datos.map((index, i) => (
          <Boton numero={index} colori={colors[i]} backcolor={backcolor[i]} />))}
      </div>
    </div>
  )
}

export default App
