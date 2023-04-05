import './styles.css'

export function RadioInput({ children, value, ...rest }) {
  return (
    <>
      <input
        className="radio-input"
        value={value}
        type="radio"
        id={value}
        name="cutlery"
        {...rest}
      />
      <label className="label" htmlFor={value}>
        <span>{children}</span>
        <div className="radio-input__btn"></div>
      </label>
    </>
  )
}
