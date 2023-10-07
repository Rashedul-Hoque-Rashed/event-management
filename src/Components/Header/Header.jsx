import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import banner from "../../assets/banner.jpg"

const Header = () => {
    return (
        <div className="hero" style={{backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="hero-overlay w-full bg-white bg-opacity-70"></div>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Header;


