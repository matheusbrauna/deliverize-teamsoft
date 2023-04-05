import './styles.css'
import arrowLeft from '../../assets/arrow-left.svg'
import logo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import login from '../../assets/account-circle.svg'
import arrowDown from '../../assets/arrow-down.svg'

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container__left">
          <img
            src={arrowLeft}
            alt="Flecha para esquerda"
            className="header-container__arrow-left-icon"
          />
          <img src={logo} alt="Logo" className="header-container__logo" />
        </div>
        <div className="header-container__right">
          <div className="header-container__delivery">
            <div className="header-container__delivery__left">
              <p>Entrega:</p>
              <p>R. Antonio Braune, 222</p>
            </div>
            <div className="header-container__delivery__right">
              <img src={arrowDown} alt="" />
            </div>
          </div>
          <div className="header-container__search">
            <input
              type="text"
              className="header-container__search-input"
              placeholder="Busque por estabelecimento ou produtos"
            />
          </div>
          <div className="header-container__account">
            <img src={login} alt="Conta" />
            <p>Entrar</p>
          </div>
          <div className="header-container__cart">
            <div>
              <img src={shoppingCart} alt="Carrinho" />
              <span className="header-container__cart-quantity">1</span>
            </div>
            <p>Carrinho</p>
          </div>
        </div>
      </div>
    </header>
  )
}
