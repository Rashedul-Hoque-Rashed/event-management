import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="px-4 mb-24 -mt-[650px] md:-mt-[420px] lg:-mt-[500px]">
                <h2 className="text-3xl font-semibold mb-8">Latest Blog posts</h2>
                <div>
                    {blogs.map(blog => (
                        <div key={blog.id} className=" flex flex-col md:flex-row gap-6 items-center bg-gray-100 p-2 md:p-4 lg:p-8 rounded-lg mb-10">
                            <img src={blog.image} alt={blog.title} className="md:w-1/2 rounded-lg h-auto mb-4" />
                            <div>
                            <h3 className="text-2xl font-bold">{blog.title}</h3>
                            <p className="text-sm font-semibold text-gray-600 mb-2">{blog.date} by {blog.author}</p>
                            <p className="text-lg font-medium text-gray-700">{blog.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;