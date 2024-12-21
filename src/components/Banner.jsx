import React from 'react';
import profile from '../assets/akash.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen px-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={profile}
                    className="md:w-[400px] md:ml-[150px] shadow-2xl rounded-full" />
                <div className='space-y-4'>
                    <h1 className="text-4xl font-bold">Hello I'M</h1>
                    <h1
                        className="text-6xl font-bold"
                        style={{
                            WebkitTextStroke: "1px black", // Adds the outline
                            color: "transparent", // Makes the text fill transparent
                        }}
                    >Akash Chowhan</h1>
                    <h1 className='text-3xl'>SEO Specialist | <span className='text-[rgb(10,57,129)]'>Digital Marketing Strategist</span></h1>
                    <p className="py-6 md:w-[500px]">
                        With 5 Years of experience in search engine optimization and digital marketing, I specialize in developing and implementing strategies that improve online visibility and drive organic traffic. Proficient in on-page, off-page, and technical SEO, I help businesses achieve top rankings on search engines and enhance their digital presence.
                    </p>
                    <div className="flex gap-6 items-center">
                        <a
                            href="https://www.facebook.com/profile.php?id=100024685006293&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-3xl"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/itakashbdd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-700 text-3xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.fiverr.com/akashchowhan3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-700 text-3xl"
                        >
                            <TbBrandFiverr />
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~013815e3b564273cd2?mp_source=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-500 hover:text-teal-700 text-3xl"
                        >
                            <FaUpwork />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akash-chowhan-6a134a211/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-500 hover:text-teal-700 text-3xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;