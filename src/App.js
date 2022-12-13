import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MenuItemCard from "./Components/Order/MenuItemCard";

function App() {
  return (
    <>
      <main>
          <Routes>
              <Route path='/' element={<MenuItemCard />} />
          </Routes>
      </main>

    </>
  );
}

export default App;
