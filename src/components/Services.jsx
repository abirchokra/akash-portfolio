import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSpeaker } from 'react-icons/fi';
import { MdLocalOffer } from 'react-icons/md';
import { RiLineChartLine } from 'react-icons/ri';

const Services = () => {

    return (
        <div className='my-24'>
            <div className='md:flex justify-center gap-8'>
                <div className='font-bold md:text-5xl'>
                    <h1
                        className="md:text-6xl text-5xl font-bold mx-6 md:mx-0"
                        style={{
                            WebkitTextStroke: "1px black", // Adds the outline
                            color: "transparent", // Makes the text fill transparent
                        }}
                    >My Services</h1>
                </div>
                <div className='space-y-3 md:text-6xl text-center '>
                    <h2>TRANSFORMING IDEAS</h2>
                    <h2>INTO SEAMLESS</h2>
                    <h2>DIGITAL EXPERIENCES</h2>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8 mx-5 md:mx-0'>
                <div className='md:w-[400px] md:h-[200px] border-2 p-4 border-black space-y-3'>
                    <div className='text-3xl'><RiLineChartLine /></div>
                    <h2 className='text-2xl font-semibold'>Digital Marketing Manager</h2>
                    <p> Develops and oversees comprehensive online marketing strategies to drive brand growth and engagement.</p>

                </div>
                <div className='md:w-[400px] md:h-[200px] border-2 p-4 border-black space-y-2'>
                    <div className='text-2xl'><AiOutlineSearch /></div>
                    <h2 className='text-2xl font-semibold'>Search Engine Optimization Specialist</h2>
                    <p>Optimizes website content and structure to improve search engine rankings and increase organic traffic.</p>


                </div>
                <div className='md:w-[400px] md:h-[200px] border-2 p-4 border-black space-y-3'>
                    <div className='text-3xl'><FiSpeaker /></div>
                    <h2 className='text-2xl font-semibold'>Marketing Specialist</h2>
                    <p >Executes targeted campaigns and strategies to promote products and services effectively.</p>
                </div>
                <div className='md:w-[400px] md:h-[200px] border-2 p-4 border-black space-y-3'>
                    <div className='text-3xl'><MdLocalOffer /></div>
                    <h2 className='text-2xl font-semibold'>Promotions Specialist</h2>
                    <p>Designs and implements promotional initiatives to boost brand visibility and customer acquisition.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;

// Digital Marketing Manager · Search Engine Optimization Specialist · Marketing Specialist · Promotions Specialist