import { Product } from './components/Product'
import { Header } from './components/Header'
import { Ingredients } from './components/Ingredients'
import { Loading } from './components/Loading'
import { useProducts } from './hooks/useProducts'

export function App() {
  const { products, isLoading } = useProducts()
  const renderProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  const renderIngredients = products
    .map((product) => product.ingredients)
    .map((ingredient) => ingredient[0].itens)
    .map((item) => (
      <Ingredients key={item} ingredients={item} product={products[0]} />
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
