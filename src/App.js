import "./App.css";
import NavBar from "./components/NavBar";
import DetailsPage from "./pages/DetailsPage";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        {/* don't forget to add :id */}
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
