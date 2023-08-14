import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <TypeAnimation
      className='font-bold text-8xl'
        sequence={[
          // Same substring at the start will only be typed once, initially
          'Country\'s leading ed-tech platform with best teachers',
          1000,
          'Country\'s leading ed-tech platform with best content',
          1000,
          'Country\'s leading ed-tech platform with best service',
          1000
        ]}
        speed={40}
        // style={{ fontSize: '2em' }}
        repeat={2}
      />
    </div>
  );
};

export default Header;