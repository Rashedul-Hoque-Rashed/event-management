import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Reviews from "../../Components/Reviews/Reviews";
import Service from "../../Components/Service/Service";
import Teams from "../../Components/Teams/Teams";


const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <Teams/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;