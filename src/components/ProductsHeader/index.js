import {BsFilterRight, BsSearch} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {sortbyOptions, activeOptionId} = props

  const onSearchResult = event => {
    const {filterBySearchElement} = props
    filterBySearchElement(event.target.value)
  }

  return (
    <div className="products-header">
      <div className="input-container">
        <input
          type="search"
          placeholder="search"
          className="input-element"
          onChange={onSearchResult}
        />
        <div className="search-icon-container">
          <BsSearch />
        </div>
      </div>
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
