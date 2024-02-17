import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import FoodieFooter from "./Components/Common/FoodieFooter";
import FoodieNavbar from "./Components/Common/FoodieNavbar";

function App() {
  return (
    <BrowserRouter>
      <FoodieNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FoodieFooter />
    </BrowserRouter>
  );
}

export default App;
