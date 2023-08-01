import React, {useState} from 'react';
import Dish from './Dish';
import dishes from './data';
import './../styles/App.css';

  const App = () => {
    let [menu, setMenu] = useState(dishes);
    let [categories, setCategories] = useState('all');

    const filterMenu = (category) => {
        let newMenu = dishes.filter((dish) => dish.category === category);
        if(category === 'all') newMenu = dishes;
        setMenu(newMenu);
        setCategories(category);
    }
    return (
      <div>
        <h1>Our Menu</h1>
        <div className='filterOptions'>
            <a onClick={() => filterMenu('all')}>All</a>
            <a onClick={() => filterMenu('breakfast')}>breakfast</a>
            <a onClick={() => filterMenu('lunch')}>Lunch</a>
            <a onClick={() => filterMenu('shakes')}>Shakes</a>
        </div>
        <div className="dishes">
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
      </div>
    );
  }

export default App;
