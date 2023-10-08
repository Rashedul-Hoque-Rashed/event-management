import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";

const Booked = () => {

    
    const [isSeeAll, setIsSeeAll] = useState(false);

    
    const booked = JSON.parse(localStorage.getItem('booked'));



    return (
        <div className="container mx-auto">
            <Navbar />
            <div>
                {
                    booked.length !== 0 ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 mb-24 rounded-lg -mt-[650px] md:-mt-[420px] lg:-mt-[500px]">
                        {
                            isSeeAll ?
                                booked.map(booking => <div
                                    key={booking.id}
                                    className="border rounded-lg p-5">
                                    <div className="flex flex-col md:flex-row items-center gap-4">
                                        <img className="w-72 h-44 rounded-lg" src={booking.img} alt="" />
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{booking.title}</h4>
                                            <p>{booking.short_description}</p>
                                            <p className="text-lg font-bold mt-2">Price: {booking.price}$</p>
                                        </div>
                                    </div>
                                </div>) :
                                booked.slice(0, 4).map(booking => <div
                                    key={booking.id}
                                    className="border rounded-lg p-5">
                                    <div className="flex flex-col md:flex-row items-center gap-4">
                                        <img className="w-72 h-44 rounded-lg" src={booking.img} alt="" />
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{booking.title}</h4>
                                            <p>{booking.short_description}</p>
                                            <p className="text-lg font-bold mt-2">Price: {booking.price}$</p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div> : <p className="text-3xl font-bold text-center -mt-[500px] md:-mt-96">
                        You have not booked any event!!!
                    </p>
                }
                <div className="flex justify-center mt-10">
                    {
                        booked.length > 4 && <button onClick={() => setIsSeeAll(!isSeeAll)} className="btn normal-case text-white bg-blue-500 px-5 hover:bg-blue-600">
                            {
                                isSeeAll ? 'See Less' : 'See All'
                            }
                        </button>
                    }
                </div>
            </div>
<Footer/>
        </div>
    );
};

export default Booked;