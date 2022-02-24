import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DishesServices from "../../services/dishes.service";

const Dish = () => {
  const [dish, setDish] = useState([]);
  const { id } = useParams();
  const _id = id;

  useEffect(() => {
    const service = new DishesServices();

    service.getOneDish(_id).then((result) => {
      setDish(...result);
      console.log(result);
    });
  }, [_id]);

  return (
    <>
      {dish && (
        <div>
          <h1>{dish.name}</h1>
          <h2>Ar {dish.price}</h2>
          <h3>{dish.category}</h3>
        </div>
      )}
    </>
  );
};

export default Dish;
