import './styles.css'
import React from 'react'

export function Popover() {
  return (
    <section className="popover" aria-labelledby="popover-title">
      <header className="popover__header">
        <h2 className="popover__title-main" id="popover-title">
          Adicionado com Sucesso
        </h2>
      </header>
      <div className="popover__content">
        <h3 className="popover__title">Oferta Cheddar Bacon</h3>
        <ul className="popover__list" aria-label="Lista de ingredientes">
          <li className="popover__list-item">1 Carne 250gr</li>
          <li className="popover__list-item">1 Carne 250gr</li>
          <li className="popover__list-item">1 Carne 250gr</li>
          <li className="popover__list-item">1 Carne 250gr</li>
        </ul>
      </div>
    </section>
  )
}
