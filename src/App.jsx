
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recipes from './components/Recipes/Recipes.jsx'
import RecipesItems from './components/RecipesItems/RecipesItems.jsx'



function App() {
  

  return (
    <div>
        <Header></Header>
        <Hero></Hero>
          <div className='flex mt-7'>
            <Recipes></Recipes>
            <RecipesItems></RecipesItems>
          </div>
    </div>
  )
}

export default App
