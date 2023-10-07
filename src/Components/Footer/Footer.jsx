import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-neutral p-10 text-neutral-content">
            <div className='container mx-auto pt-10 px-6'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
                    <nav className="flex flex-col gap-2">
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Concerts and Music Festivals</a>
                        <a className="link link-hover">Theater and Performing Arts</a>
                        <a className="link link-hover">Comedy Shows</a>
                        <a className="link link-hover">Sports Events</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className="flex flex-col gap2">
                        <header className="footer-title mb-4">Social</header>
                        <div className="flex gap-4">
                            <FaFacebook className="w-8 h-8" />
                            <FaTwitter className="w-8 h-8" />
                            <FaInstagram className="w-8 h-8" />
                        </div>
                    </nav>
                </div>
                <aside className='mx-auto mt-16 -mb-8'>
                    <p className='text-xs font-thin'>Copyright © 2023 - All right reserved</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;