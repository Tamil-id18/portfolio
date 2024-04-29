import React from 'react';
import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle:'Im a Front-End Developer',
    social:{
      twitter: '',
      facebook:'',
      linkedin:''
    }
  }
  return (
    <>
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
     <div className='w-1/2 flex flex-col'>
     <h1 className=' text-white text-6xl font-hero-font'>Hi,<br />
        <span className='text-black'>Im</span> Tamilmaran 
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
            <a href={config.social.facebook} className='pr-5  hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
     </div>
        <img className='md:w-1/3' src={HeroImg} alt="" />
    </section>
      
    </>
  );
}

export default Hero;
