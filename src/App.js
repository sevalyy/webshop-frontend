import "./App.css";
import NavBar from "./components/NavBar";
import DetailsPage from "./pages/DetailsPage";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import ElectronicsPage from "./pages/CategoryPages/CategoryPage";
// import JeweleryPage from "./pages/CategoryPages/JeweleryPage";
// import MensClothingPage from "./pages/CategoryPages/MensClothingPage";
// import WomensClothingPage from "./pages/CategoryPages/WomensClothing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
