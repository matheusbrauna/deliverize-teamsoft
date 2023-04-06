import { Product } from './components/Product'
import { Header } from './components/Header'
import { Ingredients } from './components/Ingredients'
import { Loading } from './components/Loading'
import { useProducts } from './hooks/useProducts'
import { useIngredients } from './hooks/useIngredients'

export function App() {
  const { products, isLoading } = useProducts()
  const { ingredients } = useIngredients()
  const renderProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  const renderIngredients = ingredients.map((item) => (
    <Ingredients key={item} ingredients={item} />
  ))

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__product-list">
          {isLoading && <Loading isLoading={isLoading} />}
          {renderProducts}
          {renderIngredients}
        </div>
      </main>
    </div>
  )
}
