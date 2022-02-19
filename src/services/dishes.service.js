import axios from "axios";
import { BASE_URL } from "../constants/urls";

class DishesServices {
  getDishesByCategory(category) {
    return axios
      .get(`${BASE_URL}/dishes?category=${category}`)
      .then((result) => result.data)
      .then((data) => data.json());
  }

  getOneDish(id) {
    return axios
      .get(`${BASE_URL}/dishes?id=${id}`)
      .then((result) => result.data)
      .then((data) => data.json());
  }
}

export default DishesServices;
