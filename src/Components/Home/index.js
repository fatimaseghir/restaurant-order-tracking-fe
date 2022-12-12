import flame from '../../icons/flame.png';
import img1 from '../../images/img1.jpg';
import './style.css';


function Home() {

    return (
        <div className="home container d-flex justify-content-center align-items-center">

                <img className="img1 bg-image vh-100 min-vw-100 position-relative" src={img1} alt="image" ></img>
            <div className="position-absolute text-center">
                    <img className="logo " src={flame} alt="logo"></img>
                    <h1 className="text-light">STANLEYS’ STEAKS</h1>
                    <hr className="text-light"></hr>
                    <h3 className="text-light">lovingly reared cattle from our farm to you table</h3>
            </div>

        </div>
    );
}

export default Home;
