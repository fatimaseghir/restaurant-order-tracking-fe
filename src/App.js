import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./Components/MainPage";
import {useEffect, useState} from "react";
import MenuContext from "./Contexts/MenuContext";
import OrderSummary from "./Components/Order/OrderSummary";
import Order from "./Components/Order";
import OrderConfirmed from "./Components/OrderConfirmed";

const menuTemp = [{id: -1, name: '', description: '', price: 0, image: '', imageALT: ''}];

function App() {

    const extractResponseData = (response) => {
        return response.json();
    };

    const [menu, setMenu] = useState(menuTemp);

    const fetchMenu = async () => {
        const response = await fetch(`http://localhost:8080/menu`);
        if (!response.ok) {
            throw new Error("Menu can't be fetched");
        }
        const menuData = await extractResponseData(response);
        setMenu(menuData.data);
    };

    useEffect( () => {
        fetchMenu()
            .catch(err => err.message = 'Error here!')
    }, []);

  return (
    <div>
        <MenuContext.Provider value={menu}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/createorder" element={<OrderSummary />} />
                <Route path="/order" element={<Order/>} />
                <Route path="/orderconfirmed" element={<OrderConfirmed />} />
            </Routes>
        </MenuContext.Provider>
    </div>
  );
}

export default App;
