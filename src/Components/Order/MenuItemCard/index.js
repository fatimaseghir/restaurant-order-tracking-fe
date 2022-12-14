import './style.css';
import Minus from '../../../icons/minus.png';
import Plus from '../../../icons/plus.png';
import {useState, useRef} from 'react';

const MenuItemCard = (props) => {

    const {menuItem} = props;
    const ref = useRef(null);

    const [itemState, setItemState] = useState(0);

    const inc = () => {
        setItemState(itemState + 1);
    }

    const dec = () => {
        if (itemState > 0) {
            setItemState(itemState - 1);
        }
    }

    return (
        <div id='card'>
            <img id='food' src={menuItem.imageURL} alt={menuItem.imageALT} />
            <div id='cardBody'>
                <h4 id='name'>{menuItem.name}</h4>
                <p id='description'>{menuItem.description}</p>
                <p id='price'>£{menuItem.price}</p>
                <div id='input'>
                    <img className='icon' id='minus' src={Minus} onClick={dec} />
                    {itemState}
                    <img className='icon' id='plus' src={Plus} onClick={inc} />
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;