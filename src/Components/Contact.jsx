import React from 'react';


const Contact = () => {
  const config ={
    email: 'abdemaran18@gmail.com',
    phone:'+917868966452'
  }
  return (
    <>
    <section className='flex flex-col  bg-primary px-5 py-32  text-white' id='contact'>
       
        <div className=' flex flex-col items-center'>
            
            <h1 className='text-4xl border-b-4 text-white border-[#2b2d77] mb-5 w-[125px] '>Contact</h1>
            <p className='pb-5'>If you want discuss more in details, please contact me </p>
            <p className='py-2'> <span className='font-bold'>Email :</span>{config.email}</p>   
            <p className='py-2'> <span className='font-bold'>Phone :</span>{config.phone}</p>   
        </div>
    </section>
      
    </>
  );
}

export default Contact;
