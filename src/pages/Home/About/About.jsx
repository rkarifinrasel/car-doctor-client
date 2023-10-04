import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import perts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className='relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    
    <img src={perts}className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white " />
    </div>
    <div>
        <h1 className='text-orange-600 font-bold text-lg'>About Us</h1>
      <h1 className="text-5xl font-bold w-2/3">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;