import React from 'react';
import DishesServices from '../../services/dishes.service';
import { Link } from 'react-router-dom';

const FoodCard = ({ id, photo, name, price }) => {

  let services = new DishesServices();
  let tmpDish = services.getOneDish(id);

  return (
    <Link to={`/dishes/${id}`}>
      <div className='shadow-md'>
          <img className=' h-52 object-cover' src={`../../assets/${photo}`} alt="food image" />
          <h2 className='px-8 pt-4 font-semibold text-orange-500'>{name}</h2>
          <p className='px-8 leading-6 pb-4 font-bold text-gray-800'>{price}</p>
      </div>
    </Link>
  )
}

export default FoodCard;