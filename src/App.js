import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Order from "./Components/Order";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Order />} />
      </Routes>
  );
}

export default App;
