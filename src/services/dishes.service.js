import axios from "axios";
import { BASE_URL } from "../constants/urls";

class DishesServices {
  getAllDishes() {
    return axios.get(`${BASE_URL}/dishes`).then((response) => {
      return response.data;
    });
  }

  async getDishesByCategory(category) {
    return await axios
      .get(`${BASE_URL}/dishes?category=${category}`)
      .then((response) => {
        return response.data;
      });
  }

  getOneDish(id) {
    return axios.get(`${BASE_URL}/dishes/${id}`).then((response) => {
      return response.data;
    });
  }
}

export default DishesServices;
