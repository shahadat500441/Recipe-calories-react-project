import PropTypes from 'prop-types';

const RecipesItems = ({recipeItems}) => {
    const {recipe_name,Preparing_time,Calories }= recipeItems
    return (
        <div className='w-1/3 text-center'>
            
            <h2 className="text-xl font-bold ">Want to cook : {recipeItems.length}</h2>
            <hr className='my-3' />
            <div className="flex justify-around font-medium text-[#878787]">
                <h2>Name</h2>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>

            <div className='flex justify-around'>
               
            </div>
        </div>
    );
};

RecipesItems.propTypes = {
    recipeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipesItems;
