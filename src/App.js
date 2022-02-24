import { Route, Routes } from "react-router-dom";
import Dishes from "./pages/dishes";
import Home from "./pages/home";
import Dish from "./pages/dishes/Dish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/dishes/:id" element={<Dish />} />
    </Routes>
  );
}

export default App;
