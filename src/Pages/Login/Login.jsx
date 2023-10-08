import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { googleLogin, githubLogin, login } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handelGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                Navigate('/')
            })
            .catch(err => {
                console.error(err.message);
            });
    }
    const handelGithub = () => {
        githubLogin()
            .then(res => {
                console.log(res.user);
                Navigate('/')
            })
            .catch(err => {
                console.error(err.message);
            });
    }

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
        .then(res => {
            console.log(res.user);
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
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


    return (

        <div className="">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 -mt-[620px] md:-mt-[550px] lg:-mt-[650px]">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="mb-14 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="flex justify-center gap-8">
                            <button onClick={handelGithub} className=""><BsGithub className="w-10 h-10 text-black" /></button>
                            <button onClick={handelGoogle} className=""><BsGoogle className="w-10 h-10 text-blue-500" /></button>
                        </div>
                        <p className="text-center font-bold">or</p>
                        <form onSubmit={handelLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500 underline">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;