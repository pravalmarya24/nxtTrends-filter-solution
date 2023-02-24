import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {searchResult} = props
  const renderCategoryList = () => {
    const {categoryOptions, filteringTheCategory} = props

    return categoryOptions.map(eachCategory => {
      const onFilterCategory = () =>
        filteringTheCategory(eachCategory.categoryId)
      return (
        <li
          className="list"
          key={eachCategory.categoryId}
          value={eachCategory.categoryId}
        >
          <p className="btn" onClick={onFilterCategory}>
            {eachCategory.name}
          </p>
        </li>
      )
    })
  }

  const categoryProductList = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="unordered-List">{renderCategoryList()}</ul>
    </>
  )

  const renderRatingList = () => {
    const {ratingsList, filterTheRatingList} = props

    return ratingsList.map(eachRating => {
      const onFilterRating = () => filterTheRatingList(eachRating.ratingId)
      return (
        <li className="rating-list" key={eachRating.ratingId}>
          <button className="btn" type="button" onClick={onFilterRating}>
            <img
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
              className="stars-size"
            />
          </button>
          <p className="up-para">& up</p>
        </li>
      )
    })
  }

  const ratingProductList = () => (
    <>
      <h1 className="category-heading">Rating</h1>
      <ul className="unordered-List">{renderRatingList()}</ul>
    </>
  )

  const onClearFilters = () => {
    const {clearingTheFilters} = props
    clearingTheFilters()
  }

  const onSearchResult = event => {
    const {filterBySearchElement} = props
    filterBySearchElement(event.target.value)
  }

  const onEnterSearchValue = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          value={searchResult}
          type="search"
          placeholder="search"
          className="input-element"
          onChange={onSearchResult}
          onKeyDown={onEnterSearchValue}
        />
        <div className="search-icon-container">
          <BsSearch />
        </div>
      </div>
      {categoryProductList()}
      {ratingProductList()}
      <button className="clear-btn" type="button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
