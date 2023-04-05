import './styles.css'
import hamburguer from '../../assets/hamburguer.png'
import { formatPrice } from '../../utils/formatPrice'

export function Product({ product }) {
  const { nm_product, vl_price, vl_discount, description } = product
  const formattedPrice = formatPrice(vl_price)
  const formattedDiscount = formatPrice(vl_discount)

  return (
    <article className="product">
      <div className="product-container">
        <figure className="product__image-container">
          <img src={hamburguer} alt="" className="product__image" />
        </figure>
        <div className="product__info">
          <h1 className="product__name">{nm_product}</h1>
          <p className="product__description">{description}</p>
          <div className="product__price-container">
            <span className="product__price product__price--original">
              {formattedPrice}
            </span>
            {formattedDiscount && (
              <span className="product__price product__price--discount">
                {formattedDiscount}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
