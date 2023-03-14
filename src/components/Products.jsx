import './Products.css'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addCart } = useCart()
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button style={{ backgroundColor: 'blue' }} onClick={() => addCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
