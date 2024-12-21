import React from 'react';

const Project = ({ project }) => {
    const { image, title, amount, delivery_time } = project;
    return (
        <div className="card bg-base-100 md:w-96 mx-5 md:mx-0 shadow-xl">
            <figure>
                <img
                    src={image}
                    
                     />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><span className='font-semibold'>Amount:</span> {amount}</p>
                <p><span className='font-semibold'>Delivery Time:</span> {delivery_time}</p>
              
            </div>
        </div>
    );
};

export default Project;

