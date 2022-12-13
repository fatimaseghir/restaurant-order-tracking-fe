import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MenuItemCard from "./Components/Order/MenuItemCard";
import Order from "./Components/Order";

function App() {
  return (
    <div>
        <Order />
    </>
  );
}

export default App;
