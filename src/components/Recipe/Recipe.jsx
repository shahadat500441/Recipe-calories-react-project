import PropTypes from 'prop-types';
import { SiIngress } from 'react-icons/si';
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe}) => {
    console.log(recipe)
    const { recipe_image,recipe_name,short_description,Preparing_time, Ingredients,Calories } = recipe
    return (
        
           <div className='border-2 p-6 rounded-lg'>
            <div>
                <img className='w-[400px] h-[250px] rounded-lg' src={recipe_image} alt="" />
            </div>
                <h2 className=' text-xl font-bold my-2'>{recipe_name}</h2>
                <p  className=' text-[#878787] mb-2'>{short_description}</p>
                <hr />
                <h2 className=' text-lg font-semibold my-2'>Ingredients: {Ingredients.length}</h2>
                <ul className='my-2'>
                    {Ingredients.map((item, idx)=><li className=' text-[#878787]' key={idx}>{item}</li>)}
                </ul>
                <hr />
                <div className='flex justify-between mt-2'>
                    <div className='flex items-center space-x-2'>
                        <CiClock2 />  <span>{Preparing_time}</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaFire /> <span>{Calories}</span>
                    </div>
                </div>
                <button className=' bg-green-400 px-5 py-3 rounded-xl font-serif mt-3'>Want to Cook</button>
           </div>
        
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    recipe_id: PropTypes.string.isRequired,
    recipe_image: PropTypes.string.isRequired,
    recipe_name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    Preparing_time: PropTypes.string.isRequired,
    Ingredients: PropTypes.array.isRequired,
    Calories: PropTypes.number.isRequired,
};
export default Recipe;
