import axios from "axios";

class DishesServices {
  getDishesByCategory(category) {
    return axios.get(`/api/v1/dishes?category=${category}`);
  }

  getOneDish(id) {
    return axios.get(`/api/v1/dishes?id=${id}`);
  }
}

export default DishesServices;
