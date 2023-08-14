import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mailto from '../components/Mailto';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white p-8 scroll-smooth">
    <Navbar />
     <p className='font-bold text-2xl text-center my-20'>Contact us</p>
     <p className='text-center'>Come to our location: Flat- B1 House- 364 Road 5 Avenue 4 Mirpur DOHS, Dhaka</p>
     <p className='text-center'>Shoot us an email at <Mailto label="admin@aparsclassroom.com" mailto="mailto:admin@aparsclassroom.com" />
</p>
    <p className='text-center'>Or, Visit our <Link to="https://www.facebook.com/AparsClassroom/" className="underline"> facebook page</Link></p>
    <Footer/>
  </div>
  );
};

export default Contact;