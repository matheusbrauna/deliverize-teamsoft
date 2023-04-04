import { Ingredient } from '../Ingredient/Ingredient'
import { RadioInput } from '../RadioInput/RadioInput'
import './Ingredients.css'

export function Ingredients() {
  return (
    <div className="ingredients">
      <div className="ingredients__card">
        <h2 className="ingredients__title">Adicionar Ingredientes</h2>
        <p className="ingredients__description">Até 8 ingredientes.</p>
      </div>
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <div className="ingredients__card">
        <h2 className="ingredients__title">Precisa de talher?</h2>
      </div>
      <RadioInput value="yes">Sim</RadioInput>
      <RadioInput value="no">Não</RadioInput>
    </div>
  )
}
