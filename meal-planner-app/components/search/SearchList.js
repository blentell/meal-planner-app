import React, { useContext } from 'react';
import { SearchContext } from '../../context/mealContext';
import "./SearchList.css"
function SearchList() {
  const { results, handleMealSelected } = useContext(SearchContext);
  function showMealList() {
    return results.map((item, index) => {
      return (
				<li key={index} onClick={() => handleMealSelected(item)}>
					<img src={`${item.strMealThumb}/preview`} alt="meal thumbnail" />
					{item.strMeal}
				</li>
			);
    })
  }
  return (
    <div className="results">{showMealList()}
      
    </div>
  )
}

export default SearchList
