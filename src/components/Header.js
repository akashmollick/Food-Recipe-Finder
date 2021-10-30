

function Header({search,onInputChange,onSearchClick}) {

  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i className="fas fa-utensils brand-name"></i>
        Food Recipe
      </h1>
      <div className="input-group w-50 mx-auto">
        <input type="text" className="form-control " placeholder="search your recipes" 
        value={search} onChange={onInputChange}
        
        />
        <div className="input-group-append">
          <button className="btn btn-dark " onClick={onSearchClick}>
              Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
