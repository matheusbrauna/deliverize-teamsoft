import './Header.css'
import arrowLeft from '../../assets/arrow-left.svg'
import logo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <img
          src={arrowLeft}
          alt="Flecha para esquerda"
          className="header__arrow-left-icon"
        />
        <img src={logo} alt="Logo" className="header__logo" />
        <img
          src={shoppingCart}
          alt="Carrinho"
          className="header__shopping-cart"
        />
      </div>
    </header>
  )
}
