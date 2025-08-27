import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFoods from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title='Meal & SeaFoods' bgImage = {BgSeaFoods} categories={['Meat' , 'SeaFood']}/>

    </div>
  )
}

export default SeaFood
