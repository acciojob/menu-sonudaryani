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
      <div id='main'>
        <h1>Our Menu</h1>
        <div className='filterOptions'>
            <a onClick={() => filterMenu('all')}>All</a>
            <a id='menu-item-breakfast' onClick={() => filterMenu('breakfast')}>breakfast</a>
            <a id='menu-item-lunch' onClick={() => filterMenu('lunch')}>Lunch</a>
            <a id='menu-item-shakes' onClick={() => filterMenu('shakes')}>Shakes</a>
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
