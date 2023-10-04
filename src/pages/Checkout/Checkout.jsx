import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';

const Checkout = () => {
    const service=useLoaderData()
    const {_id,title,price,img}=service;
    const {user}=useContext(AuthContext)

    const handleForm=event=>{
        event.preventDefault()

        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const date=form.date.value;
        const price=form.price.value;
        const order={
            name,
           img,
           title,
            email,
            date,
            price:price,
            sevices_id:_id

        }
        fetch('https://car-doctor-server-co4lgault-rkarifinrasel.vercel.app/bookings',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
       

    }
    return (
        
         
     <div>
        <h1 className='text-center text-3xl font-bold'>Service:{title}</h1>
              <form onSubmit={handleForm} className=''>
           <div className="grid grid-cols-2">
     
        <div>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name'defaultValue={user?.displayName}className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" required />
             
              </div>
        </div>
        
             
             <div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name='date' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input type="text"name='price' defaultValue={'$'+ price } className="input input-bordered" />
             
              </div>
             </div>
             
            
            </div>
            <div className="form-control mt-6">
                
                <input type="submit" value="Order Confirm" className='btn btn-primary btn-block' />
                </div>
           </form>
     </div>
         

 
    );
};

export default Checkout;