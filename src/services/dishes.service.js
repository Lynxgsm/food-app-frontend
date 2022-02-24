import axios from "axios";
import { BASE_URL } from "../constants/urls";

class DishesServices {
  getAllDishes() {
    // Ato tsy manao then zan.
    return axios.get(`${BASE_URL}/dishes`);
  }

  getDishesByCategory(category) {
    // Tonga d niconsommenao tato lé réponse d tsy mety.
    return axios.get(`${BASE_URL}/dishes?category=${category}`);
  }

  getOneDish(id) {
    // Ary amin'ny resultat anw vo miconsomme anlé reponse fa tsy ato amin'ny service
    return axios.get(`${BASE_URL}/dishes/${id}`);
  }
}

export default DishesServices;
