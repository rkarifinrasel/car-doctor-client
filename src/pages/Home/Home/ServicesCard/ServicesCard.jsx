import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {_id,img,price,title}=service;
    return (
        <div className="card  w-96 bg-base-100 shadow-xl">
        <figure><img src=
        {img} className='ml-10 mt-10 mr-10 border rounded-lg' /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-left">{title}</h2>
          <p className='text-orange-600 text-2xl text-left'>Price:${price}</p>
          <div className="card-actions justify-end">
           <Link to={`/booking/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;