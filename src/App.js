import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Recipes from "./components/Recipes";

//https://api.edamam.com/search?q=banana&app_id=8239c438&app_key=c43b59cf0a880267007325000918e29e
function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const App_id = "8239c438";
  const App_key = "c43b59cf0a880267007325000918e29e";
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const result = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${App_id}&app_key=${App_key}`
    );
    const data = await result.json();
    setRecipes(data.hits);
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getdata();
  };
  return (
    <div key={1}>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
      <div className="row">
        {recipes.map((recipe) => (
          <Recipes
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
