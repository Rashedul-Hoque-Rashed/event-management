import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from 'sweetalert2'
import Footer from "../../Components/Footer/Footer";

const Details = () => {

    const events = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt);


    const handelBooking = () => {
        const addBooked = [];
        const booking = JSON.parse(localStorage.getItem('booked'));
        if(!booking){
            addBooked.push(event);
            localStorage.setItem('booked', JSON.stringify(addBooked));
            Swal.fire({
                icon: 'success',
                title: 'You have successfully booked this event',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else{
            const exist = booking.find(booked => booked.id === idInt);
            if(!exist){
                addBooked.push(...booking, event);
                localStorage.setItem('booked', JSON.stringify(addBooked));
                Swal.fire({
                    icon: 'success',
                    title: 'You have successfully booked this event',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'You have already booked this event',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }



    return (
        <div className="container mx-auto">
            <Navbar/>
            <div className="border p-5 mb-20 rounded-lg w-3/4 mx-auto -mt-[650px] md:-mt-[420px] lg:-mt-[500px]">
                <img className="rounded-lg w-full" src={event.img} alt="" />
                <h2 className="text-xl md:text-4xl font-bold mt-8 mb-4">{event.title}</h2>
                <p>{event.full_description}</p>
                <div className="flex gap-6 items-center">
                <h4 className="text-xl font-bold mt-4">Price: {event.price}$</h4>
                <button onClick={handelBooking} className="btn normal-case text-white bg-blue-500 hover:bg-blue-600 mt-4 px-5">Booking</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Details;