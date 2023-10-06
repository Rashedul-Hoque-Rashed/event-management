import img from "../../assets/speakers-with-high-volume-concept.png"
const Banner = () => {
    return (
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-center items-center gap-6 ">
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-black font-bold">Crafting Unforgettable Entertainment Experiences</h2>
                <p className="mt-4">Crafting Memorable Moments, One Event at a Time. Your Vision, Our Expertise.</p>
            </div>
            <div>
                <img className="w-[720px]" src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;