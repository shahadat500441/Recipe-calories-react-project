import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handelRecipeItems}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 ">
            {
                recipes.map(recipe =><Recipe
                key={recipe.recipe_id}
                recipe = {recipe}
                handelRecipeItems ={handelRecipeItems}
                ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handelRecipeItems: PropTypes.func.isRequired
}

export default Recipes;