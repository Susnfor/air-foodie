import './Recipe.css';

function Recipe(props) {
  return (
    <div className="recipe-container">
        <div className='recipe'>
        <h1>{props.name}</h1>
        <div className='small-info'>
            <h6>🕧Prep Time: {props.prepTime}</h6>
            <h6>🕧Cook Time: {props.cookTime}</h6>
            <h6>🍕Serving Size: {props.servingTime}</h6>
        </div>

        <div className='recipe-desc'>
        {/* <h3>Ingredients</h3>
        <ul>{props.ingredients.map(ingred=>(
          <li>{ingred}</li>
        ))}</ul> */}

        {/* Description */}
        <p>{props.description}</p>
        

        {/* <h3>Instructions</h3>
        <ul>{props.instructions.map(instruction=>(
          <li>{instruction}</li>
        ))}</ul> */}
        <div className='recipe-btn'>
          {/* text 'lets cook in css' .recipe-btn button::after */}
        <button>Lets Cook!</button>
        </div>
        </div>

        </div>
    </div>
  );
}

export default Recipe;
