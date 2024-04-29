import React from 'react';
import Resume_Img from '../assets/resume.jpg';

const Resume = () => {
  const config = {
    link:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
  return (
    <>
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={Resume_Img} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[130px] '>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='bg-primary px-5 py-2 font-bold hover:border-2 border-white rounded' href={config.link}>Download</a></p>
           
            </div>
            
        </div>
    </section>
      
    </>
  );
}

export default Resume;
