import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
    return (
        <div className="container mx-auto">
            <Navbar/>
      <div className="px-4 mb-24 -mt-[650px] md:-mt-[420px] lg:-mt-[500px]">
          <div className="">
            <h2 className="text-3xl font-semibold mb-4">About Entertain</h2>
            <p className="text-lg mb-4">
              Welcome to Entertain, your ultimate source for top-tier entertainment experiences. Our passion for creating unforgettable moments drives everything we do.
            </p>
            <p className="text-lg mb-4">
              Founded with a vision to enrich lives through entertainment, we have been delivering exceptional events since 2007. Our dedication to excellence has made us a trusted name in the industry.
            </p>
            <p className="text-lg mb-4">
              At Entertain, we stand by a set of core values:
            </p>
            <ul className="list-disc pl-6 text-lg mb-4">
              <li><strong>Passion:</strong> We are deeply passionate about the arts and entertainment, and it shows in the events we curate.</li>
              <li><strong>Quality:</strong> We never compromise on quality, ensuring that every event meets the highest standards.</li>
              <li><strong>Inclusivity:</strong> We believe that entertainment should be inclusive, welcoming diverse audiences from all backgrounds.</li>
              <li><strong>Innovation:</strong> We constantly seek new ways to enhance the event experience, embracing technology and creativity.</li>
            </ul>
            <p className="text-lg mb-4">
              Our experienced team of event planners, artists, technicians, and customer support professionals works tirelessly to bring your favorite concerts, theater performances, film screenings, comedy shows, sports events, and magic extravaganzas to life.
            </p>
            <p className="text-lg mb-4">
              Join us in celebrating the magic of entertainment. Whether you are a music aficionado, a theater enthusiast, or a sports fanatic, we have something special in store for you.
            </p>
            <button className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
      </div>
      <Footer/>
    </div>
    );
};

export default About;