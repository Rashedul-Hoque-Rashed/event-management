import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Event = ({ event }) => {

    const { id, title, img, rating, price, short_description } = event;

    return (
        <div className="rounded-lg border p-4 mt-10">
            <img className="w-full h-60 rounded-lg mx-auto" src={img} alt="" />
            <h4 className="text-xl font-bold text-black mt-4 mb-2">{title}</h4>
            <div className="flex items-center gap-2">
            <Rating
                initialRating={rating}
                emptySymbol={<AiOutlineStar className="text-orange-300 w-4 h-4" />}
                fullSymbol={<AiFillStar className="text-orange-300 w-4 h-4" />}
            ></Rating>
            <p className="text-base font-medium text-slate-700 mb-1">{rating}</p>
            </div>
            <p className="mt-2 text-lg font-medium text-slate-700">{short_description}</p>
            <div className="flex justify-between items-center mt-2">
                <p className="mt-2 text-lg font-medium text-slate-700">Price: {price}$</p>
                <button className="btn normal-case text-white bg-blue-500 hover:bg-blue-600"><Link to="details">View Details</Link></button>
            </div>
        </div>
    );
};

export default Event;