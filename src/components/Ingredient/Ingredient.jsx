import './Ingredient.css'
import { QuantityInput } from '../QuantityInput/QuantityInput'

export function Ingredient() {
  return (
    <div className="ingredient">
      <div className="ingredient__content">
        <h3 className="ingredient__title">Queijo cheddar</h3>
        <span className="ingredient__price">+ R$4,99</span>
      </div>
      <QuantityInput size="small" />
    </div>
  )
}
