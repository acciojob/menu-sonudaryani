import React from "react";

const Dish = ({ dish }) => {
    return (
        <div className="dish-card">
            <img src={dish.img} alt={dish.title} />
            <div>
                <div className="details">
                    <h4>{dish.title}</h4>
                    <h4 className="price">${dish.price}</h4>
                </div>
                <p>{dish.desc}</p>
            </div>
        </div>
    )

}

export default Dish;