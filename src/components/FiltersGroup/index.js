import './index.css'

const FiltersGroup = props => {
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
          <button className="btn" type="button" onClick={onFilterCategory}>
            {eachCategory.name}
          </button>
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
              alt={eachRating.categoryId}
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

  return (
    <div className="filters-group-container">
      {categoryProductList()}
      {ratingProductList()}
      <button className="clear-btn" type="button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
