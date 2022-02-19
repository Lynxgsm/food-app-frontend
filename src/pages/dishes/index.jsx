import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/food-card';
import DishesServices from '../../services/dishes.service';

const Dishes = () => {

    const [category, setCategory] = useState("pastas");
    const [dishes, setDishes] = useState("");

    /* let data = {
        image: hero,
        title: "Pâtes bolognaises",
        price: "Ar 20.000",
    } */

    useEffect(() => {
        let services = new DishesServices();
        let tmpDishes = services.getDishesByCategory(category);

        setDishes(tmpDishes);

    }, []);

  return (
    <div>
        {/* <img className='w-screen h-screen object-cover' src={hero} alt="hero" /> */}
        <div className='w-screen h-screen bg-hero-pattern-2 bg-cover bg-no-repeat bg-fixed'></div>
        <h1 className='text-4xl text-center mt-16 mb-8 font-bold'>Catégories de plats</h1>
        <nav className='flex justify-center items-center mb-8'>
            <button onClick={() => setCategory("pastas")}  className='mx-8 px-16 py-2 rounded-md border-2 border-orange-500 text-orange-500 text'>Pâtes</button>
            <button onClick={() => setCategory("soup")} className='mx-8 px-16 py-2 rounded-md border-2 border-orange-500 text-orange-500 text'>Soupe</button>
            <button onClick={() => setCategory("seafish")} className='mx-8 px-16 py-2 rounded-md border-2 border-orange-500 text-orange-500 text'>Fruits de mer</button>
        </nav>
        <div className='px-12 grid grid-cols-5 gap-6'>
            {
                dishes.map((dish, index) => {
                    return <FoodCard key={index} id={index} {...dish} />
                })
            }
            {/* <FoodCard {...data} />
            <FoodCard {...data} />
            <FoodCard {...data} />
            <FoodCard {...data} />
            <FoodCard {...data} />
            <FoodCard {...data} />
            <FoodCard {...data} /> */}
        </div>
    </div>
  )
}

export default Dishes;