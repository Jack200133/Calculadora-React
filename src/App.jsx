import React, { useState } from 'react'
import './App.css'
import Boton from './modules/boton/Boton'

const App = () => {
  const [dispaly, setdispaly] = useState('')

  const [op, setop] = useState(new Array(3).fill(''))
  console.log('ALWAYS', op)
  const datos = ['AC', 'C', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '⁺∕₋', '0', '.', '=']
  const colors = ['#f76f69', '#9cd260', '#9cd260', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#9cd260',
    '#fafafa', '#fafafa', '#fafafa', '#fafafa']
  const backcolor = new Array(20).fill('#171717')
  backcolor.fill('#427e04', 19)

  const opera = (index) => {
    console.log('Entre OP', op)
    const a = parseFloat(op[0])
    const b = parseFloat(dispaly)
    const tete = [...op]
    switch (op[1]) {
      case '%':
        setdispaly((a % b).toString().substring(0, 1))
        tete[0] = ((a % b).toString().substring(0, 1))
        tete[1] = index
        setop(tete)
        break
      case '÷':
        setdispaly((a / b).toString().substring(0, 9))
        tete[0] = ((a / b).toString().substring(0, 9))
        tete[1] = index
        setop(tete)
        break
      case 'x':
        if ((a * b) > 999999999 && (a * b).toString().length > 9) {
          setdispaly('ERROR APACHE AC')
          return
        }
        setdispaly((a * b).toString().substring(0, 9))
        tete[0] = ((a * b).toString().substring(0, 9))
        tete[1] = index
        setop(tete)
        return
      case '-':
        setdispaly((a - b).toString().substring(0, 9))
        tete[0] = ((a - b).toString().substring(0, 9))
        tete[1] = index
        setop(tete)
        break
      case '+':
        if ((a * b) > 999999999 && (a + b).toString().length > 9) {
          setdispaly('ERROR APACHE AC')
          return
        }
        setdispaly((a + b).toString().substring(0, 9))
        tete[0] = ((a + b).toString().substring(0, 9))
        tete[1] = index
        setop(tete)
        break
      case '⁺∕₋':
        setdispaly((b * -1))
        break
      case '=':
        setdispaly(b)
        tete[0] = b
        tete[1] = index
        tete[2] = ''
        setop(tete)
        break
      default:
        break
    }
  }

  const clickHandler = (index) => {
    const nan = ['C', 'AC', '%', '÷',
      'x', '-', '+', '⁺∕₋', '=']
    if (nan.includes(index)) {
      const temp = [...op]
      switch (index) {
        case 'C':
          setdispaly('')
          return
        case 'AC':
          setdispaly('')
          setop(new Array(3).fill(''))
          return
        case '⁺∕₋':
          setdispaly((parseFloat(dispaly) * -1))
          return
        default:
          break
      }
      if (op[0] === '') {
        console.log('ENTRE')
        switch (index) {
          case '+':
            temp[0] = dispaly
            temp[1] = index
            setop(temp)
            return
          case '-':
            temp[0] = dispaly
            temp[1] = index
            setop(temp)
            break
          case '%':
            temp[0] = dispaly
            temp[1] = index
            setop(temp)
            break
          case '÷':
            temp[0] = dispaly
            temp[1] = index
            setop(temp)
            break
          case 'x':
            temp[0] = dispaly
            temp[1] = index
            setop(temp)
            break
          default:
            break
        }
        return
      } if (op[0] !== '' && op[1] === '') {
        console.log('TEMp', temp)
        if (index !== '=' && index !== '⁺∕₋') {
          temp[1] = index
          setop(temp)
        } else if (index === '⁺∕₋') {
          temp[0] = (parseFloat(temp[0]) * -1)
          setop(temp)
          return
        }
        return
      }
      setop(temp)
      opera(index)
      return
    }
    if (`${dispaly}`.length < 9) {
      if (dispaly === op[0]) {
        setdispaly(index)
        return
      }
      const tt = `${dispaly}${index}`
      setdispaly(tt)
    }
    if (dispaly === op[0]) {
      setdispaly(index)
    }
  }

  return (
    <div className="App">
      <div className="pantalla">
        <div className="text">
          {dispaly}

        </div>
      </div>
      <div className="gridcontainer">
        {datos.map((index, i) => (
          <Boton
            numero={index}
            colori={colors[i]}
            backcolor={backcolor[i]}
            click={() => clickHandler(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
