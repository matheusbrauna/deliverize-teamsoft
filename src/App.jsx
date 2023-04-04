import { Header } from './components/Header/Header'
import { Product } from './components/Product/Product'

export function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Product />
        </div>
      </main>
    </>
  )
}
