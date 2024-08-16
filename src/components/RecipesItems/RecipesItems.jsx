import PropTypes from 'prop-types';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipesItems = ({recipeItems}) => {
    return (
        <div className='w-1/3 text-center '>
            
            <h2 className="text-xl font-bold ">Want to cook : {recipeItems.length}</h2>
            <hr className='my-3' />
            <div className="flex justify-evenly font-medium text-[#878787]">
                <h2>Name</h2>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>

            <div className='border-2 rounded-lg p-2'>
             {
                recipeItems.map((recipeItem,index) => <RecipeItem key={index} recipeItem={recipeItem}></RecipeItem>)
                    
                
            }
              
             
            </div>
        </div>
    );
};

RecipesItems.propTypes = {
    recipeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    recipe_name: PropTypes.string.isRequired,
    Preparing_time: PropTypes.string.isRequired,
    Calories: PropTypes.number.isRequired,
};

export default RecipesItems;
