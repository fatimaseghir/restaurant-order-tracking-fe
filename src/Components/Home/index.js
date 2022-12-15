import flame from '../../icons/flame.png';
import './style.css';
import NavBar from "../NavBar";

function Home() {

    return (
        <div className="home" >
            <div className="main">
                <div className="container">
                    <img className="logo-homepage" src={flame} alt="logo"></img>
                    <h2 className="">STANLEYS’ STEAKS</h2>
                    <div className="h-line"></div>
                    <h6 className="">lovingly reared cattle from our farm to your table</h6>
                </div>
            <NavBar/>
            </div>
        </div>
    );
}

export default Home;

