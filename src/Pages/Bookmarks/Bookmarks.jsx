import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Bookmarks = () => {

    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 rounded-lg mb-24 -mt-[650px] md:-mt-[420px] lg:-mt-[500px]">
                {
                    bookmarks.map(bookmark => <div
                        key={bookmark.id}
                        className="border rounded-lg p-5">
                        <div>
                            <img className="w-full h-56 rounded-lg" src={bookmark.img} alt="" />
                            <h4 className="text-xl font-bold mb-2 mt-3">{bookmark.title}</h4>
                            <p className="h-12">{bookmark.short_description}</p>
                            <p className="text-lg font-bold mt-2">Price: {bookmark.price}$</p>
                        </div>
                        <button className="btn mt-2 normal-case text-white bg-blue-500 hover:bg-blue-600"><Link to={`/details/${bookmark.id}`}>View Details</Link></button>
                    </div>)
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Bookmarks;