import flame from '../../icons/flame.png';
import './style.css';
import NavBar from "../NavBar";

function Home() {

    return (
        <div className="home" >
            <div className="main">
            <div className="container">
                    <img className="logo-main" src={flame} alt="logo"></img>
                    <h1 className="">STANLEYS’ STEAKS</h1>
                    <hr className=""></hr>
                    <h3 className="">lovingly reared cattle from our farm to your table</h3>
            </div>
            <NavBar />
            </div>
        </div>
    );
}

export default Home;

