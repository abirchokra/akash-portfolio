import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>

            <div className="bg-gray-50 py-12 px-6">
                <div className='mb-[300px] "max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
                    <h2 className='text-4xl font-bold mb-4 '>Digital Marketing Manager | SEO Expert | YouTube Promotion</h2>
                    <div className='space-y-3'>
                        <p className='text-gray-500'>Akash Chowhan</p>
                        <p className='text-gray-500'>SEO Specialist | YouTube Promotion | Google Ads Expert | Social</p>
                        <p className='text-gray-500'>Media Organic Growth Expert</p>
                        <p className='text-gray-500'>Sylhet, Bangladesh</p>
                        <p className='text-gray-500'>
                            Experienced digital marketer with a proven track record of driving results across social media, SEO, content creation, and PPC advertising. Skilled in crafting compelling campaigns that engage audiences and boost brand visibility. Passionate about staying updated with industry trends and delivering top-notch marketing solutions. Let's collaborate to elevate your online presence and achieve your business objectives.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;