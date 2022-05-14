import React from 'react'
import './Boton.css'
import Proptypes from 'prop-types'

const Boton = ({
  numero, colori, backcolor, click,
}) => (
  <button className="circulo" style={{ backgroundColor: backcolor }} type="button" onClick={click}>
    <div className="dato" style={{ color: colori }}>
      {numero}
    </div>

  </button>
)

Boton.propTypes = {
  numero: Proptypes.string.isRequired,
  colori: Proptypes.string.isRequired,
  backcolor: Proptypes.string.isRequired,
  click: Proptypes.node.isRequired,
}
export default Boton
