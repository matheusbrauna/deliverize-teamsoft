import { useProducts } from './useProducts'

export function useIngredients() {
  const { products } = useProducts()
  const ingredients = products
    .map((product) => product.ingredients)
    .map((ingredient) => ingredient[0].itens)

  return {
    ingredients,
  }
}
