import PropTypes from 'prop-types';

const RecipesItems = ({recipeItems}) => {
    const {recipe_name,Preparing_time,Calories }= recipeItems
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
                recipeItems.map((recipe, index) => (
                    <div key={index} className='my-2 flex '>
                        <h2 className='mr-2'>{index + 1}.</h2>
                        <h3 className='mr-2'>{recipe.recipe_name}</h3>
                        <h4 className='mr-2'>{recipe.Preparing_time} </h4>
                        <h4 className='mr-2'>{recipe.Calories} </h4>
                        <button className='bg-green-400 p-2 rounded-lg'>Preparing</button>
                    </div>
                ))
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
