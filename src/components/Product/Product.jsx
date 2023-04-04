import './Product.css'
import hamburguerImg from '../../assets/hamburguer.png'
import { Ingredients } from '../Ingredients/Ingredients'
import { QuantityInput } from '../QuantityInput/QuantityInput'

export function Product() {
  return (
    <div className="product">
      <div className="product__col-1">
        <div className="product__image">
          <img src={hamburguerImg} alt="" />
        </div>

        <div className="product__content">
          <h1 className="product__title">Oferta picanha cheddar bacon</h1>
          <p className="product__description">
            Delicioso hambúrguer de picanha, molho de picanha, cebola crispy,
            bacon, queijo cheddar, molho cheddar e pão mix de gergelim,
            acompanhamento e bebida.
          </p>
          <div className="product__price-group">
            <span className="product__price">R$31,99</span>
            <span className="product__price product__price--line-through">
              R$34,95
            </span>
          </div>
        </div>
      </div>
      <div className="product__col-2">
        <Ingredients />
        <div className="product__confirmation">
          <QuantityInput />
          <button className="product__btn">Adicionar</button>
        </div>
      </div>
    </div>
  )
}
