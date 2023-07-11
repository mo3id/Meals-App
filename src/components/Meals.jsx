import React from 'react'

import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'
import { FiYoutube } from 'react-icons/fi'
const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();
  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>
  }
  if (meals.length < 1) {
    return <section className="section">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }
  return (
    <section className='section-center'>
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image, strYoutube: videoDesc } = singleMeal
        return <article className='single-meal' key={idMeal}>
          <img src={image} alt="MealImage" onClick={() => selectMeal(idMeal)} />
          <footer>
            <h5>{title}</h5>
            <div className="buttons">
              <button className="youtube-btn">
                <a className='vedio_link' href={videoDesc} target='blanke'>
                  <FiYoutube />
                </a>
              </button>
              <button className="like-btn" onClick={() => addToFavorites(idMeal)}>
                < BsHandThumbsUp />
              </button>
            </div>
          </footer>
        </article>
      })}
    </section>
  )
}

export default Meals