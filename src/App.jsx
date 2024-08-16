
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recipes from './components/Recipes/Recipes.jsx'
import RecipesItems from './components/RecipesItems/RecipesItems.jsx'



function App() {

  const [recipeItems, setRecipesItems] = useState([])
   
  const handelRecipeItems = cook =>{
  
    const isExist = recipeItems.find(item => item.recipe_id === cook.recipe_id);
    if(!isExist){
      const newRecipeItems = [...recipeItems,cook];
      setRecipesItems(newRecipeItems);
    }
    else{
      alert('This recipe is already added!')
    }
   
    
   
   
  }
 

  return (
    <div>
        <Header></Header>
        <Hero></Hero>
          <div className='flex mt-7'>
            <Recipes
              handelRecipeItems={handelRecipeItems}
            ></Recipes>
            <RecipesItems recipeItems={recipeItems}></RecipesItems>
          </div>
    </div>
  )
}

export default App
