import './Recipe.css';
import React, {useState} from 'react';

function Recipe(props) {
  const [popup , setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!popup);
  }
  if(popup){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'visible';
  }

  return (
    <div className='recipe-box'>
    <div className="recipe-container">
        <div className='recipe'>
        <h1>{props.name}</h1>
        <div className='small-info'>
            <h6>🕧Prep Time: {props.prepTime}</h6>
            <h6>🕧Cook Time: {props.cookTime}</h6>
            <h6>🍕Serving Size: {props.servingTime}</h6>
        </div>

        <div className='recipe-desc'>
        {/* Description */}
        <p>{props.description}</p>
        

        <div className='recipe-btn'>
          {/* text 'lets cook in css' .recipe-btn button::after */}
        <button onClick={togglePopup}>Lets Cook!</button>
        </div>
        </div>

        </div>
    </div>

        {popup && (
    <div className='popup-container'>
      <div onClick={togglePopup}className='popup'>
        <div className='recipe-container2'>

        <div className='recipe'>
        <span onClick={togglePopup} className='close-btn'><button>X</button></span>
        <h1>{props.name}</h1>
        <div className='small-info'>
            <h6>🕧Prep Time: {props.prepTime}</h6>
            <h6>🕧Cook Time: {props.cookTime}</h6>
            <h6>🍕Serving Size: {props.servingTime}</h6>
        </div>

        <div className='recipe-info'>
          <div className='ingred-desc'>
        <h3>Ingredients</h3>
        <ul>{props.ingredients.map(ingred=>(
          <li>{ingred}</li>
        ))}</ul>
        </div>
        <div className='instruct-desc'>
        <h3>Instructions</h3>
        <ul>{props.instructions.map(instruction=>(
          <li>{instruction}</li>
        ))}</ul>
        </div>
      
        </div>

        </div>



        </div>
      </div>
    </div>
    )}
    </div>
  );
}

export default Recipe;
