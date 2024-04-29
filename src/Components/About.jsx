import React from 'react';
import About_Img from '../assets/about.png';

const About = () => {
  const config = {
    line1:'Hi, My name is Tamilmaran. I am a Front-End web developer. I build beautiful websites with React.js and Tailwind css.',
    line2:'I am proficient in Frontend skills like React.js,Redux,Redux Tool Kit,Tailwind CSS,Bootsrap,Css3 and many more.',
   

  }
  return (
    <>
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={About_Img} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[160px] '>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p>{config.line2}</p>
            </div>
            
        </div>
    </section>
      
    </>
  );
}

export default About;
