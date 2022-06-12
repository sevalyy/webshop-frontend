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
import { useState } from "react";

function App() {
  //token'i burada tutma sebebimiz, log in olduysa token'a heryerden ulasabilmemiz.
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        {/* lifting state yapip token'i sadece login sayfasinda degil en ust seviyede tutuyoruz.
        set simdiki durumunu tutmak icin token ise token'a erismek icin */}
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} token={token} />}
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
