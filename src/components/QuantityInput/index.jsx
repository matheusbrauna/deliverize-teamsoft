import './styles.css'

export function QuantityInput({
  quantity = 1,
  onIncreaseQuantity,
  onDecreaseQuantity,
  size = 'standard',
}) {
  return (
    <div className={`quantity-input quantity-input--${size}`}>
      <button
        className="quantity-input__btn quantity-input__btn--decrease"
        disabled={quantity <= 1}
        onClick={onDecreaseQuantity}
      >
        <svg
          className="quantity-input__icon"
          width="14"
          height="3"
          viewBox="0 0 14 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.959167H14V2.95917H0V0.959167Z"
            fill={quantity <= 1 ? '#AEB6C1' : '#D80000'}
          />
        </svg>
      </button>
      <input
        type="number"
        className="quantity-input__input"
        readOnly
        value={quantity}
      />
      <button
        className="quantity-input__btn quantity-input__btn--increase"
        onClick={onIncreaseQuantity}
      >
        <svg
          className="quantity-input__icon"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.875 7.08417V0.959167H6.125V7.08417H0V8.83417H6.125V14.9592H7.875V8.83417H14V7.08417H7.875Z"
            fill="#D80000"
          />
        </svg>
      </button>
    </div>
  )
}
