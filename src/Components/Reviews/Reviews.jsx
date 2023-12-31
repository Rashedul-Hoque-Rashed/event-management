import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';


const Reviews = () => {

    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setUserReviews(data));
    }, [])


    return (
        <div className="mb-24 container mx-auto px-6">
            <h3 className="text-3xl text-center font-bold text-black">Reviews</h3>
            <div className="rounded-lg p-4 mt-10">


                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1440: {
                            slidesPerView: 4,
                          spaceBetween: 50,
                        }
                      }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev"
                    }}
                >
                    {userReviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="px-5 py-2">
                                <img className='w-40 h-40 rounded-full mx-auto' src={review.img} alt="" />
                                <h3 className='text-2xl font-bold text-center mt-4'>{review.user}</h3>
                                <div className='flex justify-between items-center'>
                                    <div className="flex items-center gap-2 my-3">
                                        <Rating
                                            initialRating={review.rating}
                                            emptySymbol={<AiOutlineStar className="text-orange-300 w-4 h-4" />}
                                            fullSymbol={<AiFillStar className="text-orange-300 w-4 h-4" />}
                                        ></Rating>
                                        <p className="text-base font-medium text-slate-700 mb-1">{review.rating}</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium text-slate-700 mb-1">{review.date}</p>
                                    </div>
                                </div>
                                <p>{review.review_text}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='flex justify-center gap-3 mt-8'>
                    <button className="btn rounded-full prev"><BsArrowLeft /></button>
                    <button className="btn rounded-full next"><BsArrowRight /></button>
                </div>

            </div>

        </div>
    );
};

export default Reviews;