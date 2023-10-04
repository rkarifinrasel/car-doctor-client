import React, { useEffect, useState } from 'react';
import ServicesCard from '../Home/ServicesCard/ServicesCard';

const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/carsCollection')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div >
            <div className='text-center mt-10 space-y-4'>
            <h1 className='text-3xl font-bold text-orange-600'>Services</h1>
            <h1 className='text-5xl font-bold '>Our Services Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
{
    services.map(service=><ServicesCard key={service._id}service={service}></ServicesCard>)
}
            </div>
        </div>
    );
};

export default Services;
