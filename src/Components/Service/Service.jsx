import { useEffect, useState } from "react";
import Event from "../Event/Event";

const Service = () => {


    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('events.json')
        .then(res => res.json())
        .then(data => setEvents(data));
    }, [])

    


    return (
        <div className="my-24 container mx-auto px-6">
            <h3 className="text-3xl text-center font-bold text-black">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                events.map(event => <Event key={event.id} event={event}></Event>)
            }
            </div>
        </div>
    );
};

export default Service;