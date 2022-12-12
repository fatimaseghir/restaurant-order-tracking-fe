import './style.css';

const MenuItemCard = () => {

    const placeholderMenuItem =
        {
            menu_item_image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            image_alt: 'Classic Burger',
            menu_item_name: 'Classic Burger',
            menu_item_description: 'A delicious beef burger with all the fixings, including lettuce, tomato, onion, pickles, ketchup, and mustard.',
            menu_item_price: 6.99
        };

    const quantityInput = document.querySelector('#quantity');

    return (
        <div className='card'>
            <div className='cardBody'>
                <img id='food' src={placeholderMenuItem.menu_item_image} alt={placeholderMenuItem.imageAlt} />
                <h4 id='title'>{placeholderMenuItem.menu_item_name}</h4>
                <p id='product'>{placeholderMenuItem.menu_item_description}</p>
                <p id='price'>£{placeholderMenuItem.menu_item_price}</p>
                <div id='input'>
                    <img id='minus' src='../../../../public/icons/minus.png' onClick={() => {quantityInput.value -= 1}} />
                    <input id='quantity' type='number' value='0' min='0' />
                    <img id='add' src='../../../../public/icons/plus.png' onClick={() => {quantityInput.value += 1}} />
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;