import React, { useState, useEffect } from "react";
import FoodCard from "../../components/food-card";
import DishesServices from "../../services/dishes.service";

const Dishes = () => {
  const [category, setCategory] = useState("pastas");
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const service = new DishesServices();

    service
      .getDishesByCategory(category)
      .then((result) => {
        setDishes(result.data);
        console.log(result.data);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div>
      <div className="w-screen h-screen bg-hero-pattern-2 bg-cover bg-no-repeat bg-fixed"></div>
      <h1 className="text-4xl text-center mt-16 mb-8 font-bold">
        Catégories de plats
      </h1>
      <nav className="flex justify-center items-center mb-8">
        <button
          onClick={() => setCategory("pastas")}
          className="mx-8 px-16 py-2 rounded-md border-2 border-orange-500 text-orange-500 text"
        >
          Pâtes
        </button>
        <button
          onClick={() => setCategory("soup")}
          className="mx-8 px-16 py-2 rounded-md border-2 border-orange-500 text-orange-500 text"
        >
          Soupe
        </button>
        <button
          onClick={() => setCategory("seafish")}
          className="mx-8 px-16 py-2 rounded-md border-2 border-orange-500 text-orange-500 text"
        >
          Fruits de mer
        </button>
      </nav>
      <div className="px-12 grid grid-cols-5 gap-6">
        {dishes &&
          dishes.map((dish, index) => {
            return <FoodCard key={index} id={dish.id_dish} {...dish} />;
          })}
      </div>
    </div>
  );
};

export default Dishes;
