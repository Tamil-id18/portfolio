import React from 'react';
import WebsiteImg1 from '../assets/NetflixImg.png';
import WebsiteImg2 from '../assets/food-ecommerce.jpg';
import WebsiteImg3 from '../assets/travel.jpg';

const Projects = () => {
    const config = {
        projects : [
            {
                image:WebsiteImg1,
                description:'Responsive Netflix Websites',
                link:'https://github.com/Tamil-id18/netflix-repos.git'
            },
            {
                image:WebsiteImg2,
                description:'Food ecommerce website build with React.js',
                link:''
            },
            {
                image:WebsiteImg3,
                description:'Basic Travel website',
                link:'https://github.com/Tamil-id18/travel-website.git'
            }
        ]
    }
  return (
    <>
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='projects'>
        <div className='w-1/2'>
            <div className='flex flex-col px-10 py-5'>
            <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 w-[130px] '>Projects</h1> 
            <p >These are some of my best projects.I have built these with React,Css,Bootstrap and Tailwind Css.</p>
            </div>
         
        </div>
        <div className='w-full'>
       <div className='flex flex-col md:flex-row px-10 gap-5'>
        {
            config.projects.map((project)=>(
                
            
                <div className='relative'>
                <img className='h-[200px] w-[500px] rounded-lg' src={project.image} alt="" />
                <div className='project-desc'>
                    <p className='text-center py-5 px-5'>{project.description}</p>
                    <div className='flex justify-center'>
                    <a className='bg-primary px-5 py-2 font-bold hover:border-2 border-white rounded' target='_blank' href={project.link}>View Project</a>
                    </div>
                    </div>
                  
                </div>
                
            ))
        }
       
       
       </div>
        </div>
    </section>
      
    </>
  );
}

export default Projects;
