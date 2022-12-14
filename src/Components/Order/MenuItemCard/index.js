import './style.css';
import Minus from '../../../icons/minus.png';
import Plus from '../../../icons/plus.png';
import {useState, useRef, useEffect} from "react";

const MenuItemCard = (props) => {

    const {menuItem} = props;
    const ref = useRef(null);

    const [itemState, setItemState] = useState(0);

    const increaseItemTotal = () => {
        setItemState(prevState => prevState += 1)
        ref.current.value = itemState;
    }

    const decreaseItemTotal = () => {
        if (ref.current.value > 0) {
            setItemState(prevState => prevState -= 1)
            ref.current.value = itemState;
        }
    }

    return (
        <div id='card'>
            <img id='food' src={menuItem.menu_item_image} alt={menuItem.image_alt} />
            <div id='cardBody'>
                <h4 id='name'>{menuItem.menu_item_name}</h4>
                <p id='description'>{menuItem.menu_item_description}</p>
                <p id='price'>£{menuItem.menu_item_price}</p>
                <div id='input'>
                    <img className='icon' id='minus' src={Minus} onClick={decreaseItemTotal} />
                    <input ref={ref} type='number' defaultValue='0' min='0' />
                    <img className='icon' id='plus' src={Plus} onClick={increaseItemTotal} />
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;