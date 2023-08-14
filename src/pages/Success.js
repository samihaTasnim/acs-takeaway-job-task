import React from 'react';
import Iframe from 'react-iframe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Success = () => {
  return (
    <div className="bg-gray-800 text-white p-8 scroll-smooth">
      <Navbar/>
      <p className='font-bold text-2xl text-center my-20'>Our students and their stories</p>
      <div className='grid grid-cols-2 gap-8 justify-items-center'>
        <Iframe url="https://www.youtube.com/embed/IY7xb52Z5fg"
          id=""
          className="h-max"
          display="block"
          position="relative" />
         <Iframe url="https://www.youtube.com/embed/56LDBeKEYYU"
          id=""
          className=""
          display="block"
          position="relative" />
          <Iframe url="https://www.youtube.com/embed/nuqOcxFlyQA"
          id=""
          className=""
          display="block"
          position="relative" />
          <Iframe url="https://www.youtube.com/embed/XNg8KccQ3FA"
          id=""
          className=""
          display="block"
          position="relative" />
          <Iframe url="https://www.youtube.com/embed/IhULYBZ2s4s"
          id=""
          className=""
          display="block"
          position="relative" />
          <Iframe url="https://www.youtube.com/embed/-E56DmGMG4I"
          id=""
          className=""
          display="block"
          position="relative" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Success;