import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const Event = ({ event }) => {

    const { id, title, img, rating, price, short_description } = event;

    const handelBookmarks = () => {
        const addBookmark = [];
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (!bookmarks) {
            addBookmark.push(event);
            localStorage.setItem('bookmarks', JSON.stringify(addBookmark));
            Swal.fire({
                icon: 'success',
                title: 'This item has been added to your bookmarks',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            const exist = bookmarks.find(bookmark => bookmark.id === id);
            if (!exist) {
                addBookmark.push(...bookmarks, event);
                localStorage.setItem('bookmarks', JSON.stringify(addBookmark));
                Swal.fire({
                    icon: 'success',
                    title: 'This item has been added to your bookmarks',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'This item already added to your bookmarks',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    return (
        <div data-aos="zoom-in-up" className="rounded-lg border p-4 mt-10">
            <img className="w-full h-60 rounded-lg mx-auto" src={img} alt="" />
            <div className="flex items-center justify-between mt-4 mb-2">
                <h4 className="text-xl font-bold text-black">{title}</h4>
                <button onClick={handelBookmarks}><BsBookmarkPlus className="w-6 h-6" /></button>
            </div>
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
                <button className="btn normal-case text-white bg-blue-500 hover:bg-blue-600"><Link to={`/details/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object
}

export default Event;