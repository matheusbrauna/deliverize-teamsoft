import React from 'react'
import './Popover.css'

export function Popover({ message }) {
  return (
    <div className="popover">
      <div className="popover__header">
        <div className="popover__container">
          <h3>Adicionado com Sucesso</h3>
        </div>
      </div>
      <div className="popover__content">
        <div className="popover__container">
          <h4 className="popover__title">Oferta Cheddar Bacon</h4>
          <ul className="popover__list">
            <span>Ingredientes:</span>
            <li>1 Carne 250gr</li>
            <li>1 Carne 250gr</li>
            <li>1 Carne 250gr</li>
            <li>1 Carne 250gr</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
