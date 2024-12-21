import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h1 className='font-bold md:text-6xl'>Project catalog</h1>
                <p className='text-gray-700 mt-4 text-2xl'>Get started working with Akash quickly with these predefined projects.</p>
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-8'>
                {
                    projects.map(project => <Project key={project.amount} project={project}></Project>)
                }
            </div>
            
        </div>
    );
};

export default Projects;