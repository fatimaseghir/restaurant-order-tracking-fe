import './style.css';
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'

function Menu() {

    return (
        <div className="menu">
            <h1>Menu</h1>
            <div className="menu-container">
                <div className="menu-item">
                   <h3>Starters</h3>
                    <p>Beef Fillet Carpaccio 9.95 </p>
                    <p>Herd Bruschetta 9.95 </p>
                    <p>Chard-Grilled King Prawns </p>
                    <p>Beef Fillet Carpaccio 9.95 </p>
                    <p>Herd Bruschetta 9.95 </p>
                    <p>Chard-Grilled King Prawns </p>
                    <img className="meal" src={img6} />
                </div>
                <div className="menu-item">
                <h3>Mains</h3>
                    <p>Beef Fillet Carpaccio 9.95 </p>
                    <p>Herd Bruschetta 9.95 </p>
                    <p>Chard-Grilled King Prawns </p>
                    <p>Beef Fillet Carpaccio 9.95 </p>
                    <p>Herd Bruschetta 9.95 </p>
                    <p>Chard-Grilled King Prawns </p>
                    <img className="meal" src={img5} />
                </div>
                <div className="menu-item">
                <h3>Desserts</h3>
                    <p>Beef Fillet Carpaccio 9.95 </p>
                    <p>Herd Bruschetta 9.95 </p>
                    <p>Chard-Grilled King Prawns </p>
                    <p>Beef Fillet Carpaccio 9.95 </p>
                    <p>Herd Bruschetta 9.95 </p>
                    <p>Chard-Grilled King Prawns </p>
                    <img className="meal" src={img7} />
                </div>
            </div>
        </div>
    );
}

export default Menu;