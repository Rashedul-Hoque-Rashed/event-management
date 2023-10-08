import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const Navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
        .then(res => {
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Log out successful',
                showConfirmButton: false,
                timer: 2500
            })
            Navigate('/');
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2500
            })
        })
    }


    const links = <>
        <li><NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-blue-500 underline" : ""
            }
        >Home</NavLink></li>
        <li><NavLink to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-blue-500 underline" : ""
            }
        >About</NavLink></li>
        <li><NavLink to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-blue-500 underline" : ""
            }
        >Blog</NavLink></li>
        <li><NavLink to="/booked"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-blue-800 underline" : ""
            }
        >Booked</NavLink></li>
        <li><NavLink to="/bookmarks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-blue-800 underline" : ""
            }
        >Bookmarks</NavLink></li>

    </>

    return (
        <div className="navbar items-center container mx-auto md:px-6 py-2 mb-[650px] md:mb-[450px] lg:mb-[550px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm gap-6 dropdown-content text-black font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className="w-32 -ml-10" src={logo} alt="" />
                <p className="text-2xl md:text-3xl font-extrabold text-black -ml-7">Entertain</p>
            </div> 
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal text-black font-semibold gap-6 px-1">
                    {links}
                </ul>
            </div>
            
            <div className="navbar-end">
            <div className="mr-2">
                {
                    user && <div className="items-center hidden md:flex">
                        <p className="font-bold mr-2">{user.displayName}</p>
                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                    </div>
                }
            </div>
                {
                    user ? <button onClick={handelLogOut} className="btn normal-case text-white bg-blue-500 hover:bg-blue-600">Log out</button>
                    : <Link to="/login" className="btn normal-case text-white bg-blue-500 hover:bg-blue-600">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;