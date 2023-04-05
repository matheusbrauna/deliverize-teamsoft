import './styles.css'
import { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { QuantityInput } from '../QuantityInput'
import { RadioInput } from '../RadioInput'
import { Popover } from '../Popover'

export function Ingredients({ ingredients }) {
  const [showPopover, setShowPopover] = useState(false)
  const [quantity, setQuantity] = useState(ingredients.map(() => 1))

  function handleIncreaseQuantity(index) {
    setQuantity((state) => {
      const newState = [...state]
      newState[index] += 1
      return newState
    })
  }

  function handleDecreaseQuantity(index) {
    setQuantity((state) => {
      const newState = [...state]
      newState[index] -= 1
      return newState
    })
  }

  function handleShowPopover() {
    setShowPopover(true)
    setTimeout(() => {
      setShowPopover(false)
    }, 3000)
  }

  const renderIngredients = ingredients.map((item, index) => (
    <div key={item.nm_item} className="ingredient">
      <div className="ingredient__content">
        <h3 className="ingredient__title">{item.nm_item}</h3>
        <span className="ingredient__price">{formatPrice(item.vl_item)}</span>
      </div>
      <div className="ingredient__quantity-input">
        <QuantityInput
          quantity={quantity[index]}
          onDecreaseQuantity={() => handleDecreaseQuantity(index)}
          onIncreaseQuantity={() => handleIncreaseQuantity(index)}
          size="small"
        />
      </div>
    </div>
  ))

  return (
    <div className="ingredients">
      <div className="ingredients__card">
        <h2 className="ingredients__card__title">Adicionar Ingredientes</h2>
        <p className="ingredients__card__description">Até 8 ingredientes.</p>
      </div>
      <div className="ingredients__ingredient-wrapper">{renderIngredients}</div>
      <div className="ingredients__card">
        <h2 className="ingredients__card__title">Precisa de talher?</h2>
      </div>
      <div className="ingredients__radio-input">
        <RadioInput value="yes">Sim</RadioInput>
        <RadioInput value="no">Não</RadioInput>
      </div>
      <div className="ingredients__confirmation">
        <div className="ingredients__quantity-input">
          <QuantityInput
            quantity={1}
            onDecreaseQuantity={handleDecreaseQuantity}
            onIncreaseQuantity={handleIncreaseQuantity}
          />
        </div>
        <button onClick={handleShowPopover} className="ingredients__btn">
          Adicionar
        </button>
      </div>
      {showPopover && <Popover />}
    </div>
  )
}
