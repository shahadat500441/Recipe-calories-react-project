import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
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
                key={recipe.id}
                recipe = {recipe}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;