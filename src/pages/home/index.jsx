import React from 'react';
import { hero } from '../../assets/images';

const Home = () => {
  return (
    <div>
        {/* <img className='w-screen h-screen object-cover' src={hero} alt="hero" /> */}
        <div className='w-screen h-screen bg-hero-pattern bg-cover bg-no-repeat bg-fixed'></div>
        <h1 className='text-4xl text-center mt-16 mb-8 font-bold'>Welcome to The Food App</h1>
        <p className='px-12 leading-6 text-gray-800 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem
             et esse est blanditiis aut, accusamus rerum dicta provident beatae, 
            modi illo explicabo sequi voluptas commodi repellendus, vitae ipsum quae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam voluptatibus, quod est assumenda maxime 
            fugiat commodi odit ex necessitatibus alias ab atque nisi, qui aut quisquam. Delectus, quo hic?</p>
    </div>
  )
}

export default Home;