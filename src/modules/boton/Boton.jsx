import React, { useState } from 'react'
import './Boton.css'
import Proptypes from 'prop-types'

const Boton = ({ numero, colori, backcolor }) => {
  console.log(numero)
  return (
    <div className="circulo" style={{ backgroundColor: backcolor }}>
      <div className="dato" style={{ color: colori }}>
        {numero}
      </div>

    </div>
  )
}
Boton.propTypes = {
  numero: Proptypes.string.isRequired,
  colori: Proptypes.string.isRequired,
  backcolor: Proptypes.string.isRequired,
}
export default Boton
