

function Recipes({ title, image, calories,ingredients }) {
  return (
   
      <div className="col-md-3 pb-2">
        <div className="card">
          <img
            className="card-img-top"
            src={image} alt="food "/>
          <div className="card-body">
            <h5 className="pb-1">{title}</h5>
            <p className="font-weight-bold">calories:{calories.toFixed(0)}</p>
            <p className="font-weight-bold">Ingredients:</p>

            <ul>
                
                {ingredients.map(ingredient=>(<li>
                    {ingredient.text}
                </li>)
                    )}
            </ul>
            
          </div>
        </div>
      </div>
    
  );
}

export default Recipes;
