import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
export function Filters () {
  const minPriceFilterId = useId()
  const categoryFilterid = useId()
  const { setFilters, filters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio Minimo</label>
        <input type='range' value={filters.minPrice} id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterid}>Categoria</label>
        <select name='' id={categoryFilterid} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
