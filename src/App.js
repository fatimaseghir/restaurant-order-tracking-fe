import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Order from "./Components/Order";
import MainPage from "./Components/MainPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/order" element={<Order/>} />
        </Routes>
    </div>
  );
}

export default App;
