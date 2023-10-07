import Navbar from "../../Components/Navbar/Navbar";

const Error = () => {
    return (
        <div className="container mx-auto text-center">
            <Navbar/>
            <div className="-mt-[500px] md:-mt-96">
            <h2 className="text-5xl font-bold">404 || Oops</h2>
            <p className="mt-4 font-bold">There was no data found!!</p>
            </div>
        </div>
    );
};

export default Error;