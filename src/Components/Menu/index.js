import './style.css';
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'

function Menu() {

    return (
        <div className="menu">
            <h1>Menu</h1>
            <h3>Starters</h3>
            <p>Beef Fillet Carpaccio 9.95 </p>
            <p>Herd Bruschetta 9.95 </p>
            <p>Chard-Grilled King Prawns </p>
            <p>Beef Fillet Carpaccio 9.95 </p>
            <p>Herd Bruschetta 9.95 </p>
            <p>Chard-Grilled King Prawns </p>
             <img className="meal" src={img5} />
            <h3>Mains</h3>
            <p>Beef Fillet Carpaccio 9.95 </p>
            <p>Herd Bruschetta 9.95 </p>
            <p>Chard-Grilled King Prawns </p>
            <p>Beef Fillet Carpaccio 9.95 </p>
            <p>Herd Bruschetta 9.95 </p>
            <p>Chard-Grilled King Prawns </p>
            <img className="meal" src={img6} />
            <h3>Desserts</h3>
            <p>Beef Fillet Carpaccio 9.95 </p>
            <p>Herd Bruschetta 9.95 </p>
            <p>Chard-Grilled King Prawns </p>
            <p>Beef Fillet Carpaccio 9.95 </p>
            <p>Herd Bruschetta 9.95 </p>
            <p>Chard-Grilled King Prawns </p>

        </div>
    );
}

export default Menu;