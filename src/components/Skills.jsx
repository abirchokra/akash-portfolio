import React from 'react';
import skills from '../assets/skilss.avif'
const Skills = () => {
    return (
        <div className='text-center'>
            <h2 className='md:text-7xl text-3xl font-semibold my-3'>My Special Skills</h2>
            <div className="text-center">
               
                <div className="md:flex gap-8 items-center justify-around">
                    {/* Left Div */}
                    <div className="flex flex-col mx-8 md:mx-0 items-center bg-blue-100 p-6 rounded-lg shadow-md max-w-xs">
                        <img
                            src={skills}
                            alt="Skills Illustration"
                            className="md:w-48 h-32 mb-4"
                        />
                        <p className="text-lg font-medium text-gray-700">
                            I specialize in enhancing your online presence through advanced
                            marketing strategies and technical expertise.
                        </p>
                    </div>

                    {/* Right Div */}
                    <div>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary">Digital Marketing</li>
                            <li className="step step-primary">Search Engine Optimization</li>
                            <li className="step step-primary">YouTube Marketing</li>
                            <li className="step step-primary">Promotion</li>
                            <li className="step step-primary">YouTube</li>
                            <li className="step">Google AdSense</li>
                            <li className="step">Technical SEO</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;