import './Header.css'
import arrowLeft from '../../assets/arrow-left.svg'
import logo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import login from '../../assets/account-circle.svg'
import arrowDown from '../../assets/arrow-down.svg'
import { Popover } from '../Popover/Popover'
import { useState } from 'react'

export function Header() {
  const [showToast, setShowToast] = useState(false)

  const handleShowToast = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <header className="header">
      <div className="container">
        <img
          src={arrowLeft}
          alt="Flecha para esquerda"
          className="header__arrow-left-icon"
        />
        <img src={logo} alt="Logo" className="header__logo" />
        <nav className="header__nav">
          <div className="header__delivery">
            <div>
              <p>Entrega:</p>
              <p>R. Antonio Braune, 222</p>
            </div>
            <img src={arrowDown} alt="" />
          </div>
          <input
            type="text"
            className="header__search"
            placeholder="Busque por estabelecimento ou produtos"
          />
          <div className="header__login">
            <img src={login} alt="Carrinho" />
            <p>Entrar</p>
          </div>
          <div className="header__shopping-cart">
            <div>
              <img src={shoppingCart} alt="Carrinho" />
              <span className="header__cart-quantity">1</span>
              {showToast && <Popover />}
            </div>
            <p>Carrinho</p>
          </div>
        </nav>
      </div>
    </header>
  )
}
