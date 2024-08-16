import PropTypes from 'prop-types';
const RecipeItem = ({recipeItem}) => {
    const {recipe_name,Preparing_time,Calories}= recipeItem;
    return (
        <div className='flex mb-2'>    
             
            <h3 className='mr-2'>{recipe_name}</h3>
            <h4 className='mr-2'>{Preparing_time} </h4>
            <h4 className='mr-2'>{Calories} </h4>
            <button className='bg-green-400 p-2 rounded-lg'>Preparing</button>
                    
        </div>
    );
};
RecipeItem.propTypes = {
    recipe_name: PropTypes.string.isRequired
}

export default RecipeItem;