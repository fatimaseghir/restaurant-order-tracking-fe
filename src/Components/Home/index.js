import flame from '../../icons/flame.png';
import img1 from '../../images/img1.jpg';
import './style.css';


function Home() {

    return (
        <div className="home" >
            <img className="img1" src={img1} ></img>
            <div className="container">
                    <img className="logo-main" src={flame} alt="logo"></img>
                    <h1 className="">STANLEYS’ STEAKS</h1>
                    <hr className=""></hr>
                    <h3 className="">lovingly reared cattle from our farm to your table</h3>
            </div>
        </div>
    );
}

export default Home;

