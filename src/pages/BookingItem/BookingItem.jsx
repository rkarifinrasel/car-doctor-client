import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';
import UserTableRow from '../../components/TableRow/UserTableRow';
import { useNavigate } from 'react-router-dom';

const BookingItem = () => {
    
    const {user}=useContext(AuthContext)
    const [booking,setBooking]=useState([])
    const navigate=useNavigate()

     
    const url=`https://car-doctor-server-co4lgault-rkarifinrasel.vercel.app/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res=>res.json())
            .then(data=>{
                if(!data.error){
                    setBooking(data)
                }
               else{
                navigate('/');
               }
            })

                

        
    },[url,navigate])
    const handleDelete=(id)=>{
        const procced=confirm('Are you sure want to this items delete')
       if(procced){
        fetch(`https://car-doctor-server-co4lgault-rkarifinrasel.vercel.app/bookings/${id}`,{
            method:'DELETE'

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
              if(data.deletedCount>0){
                alert('Deleted successfully')
                const remaning=booking.filter(bk=>bk._id !==id)
                setBooking(remaning)
              }
        })
       }
    }

    const handleUpdate=(id)=>{
        fetch(`https://car-doctor-server-co4lgault-rkarifinrasel.vercel.app/bookings/${id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                const remaning=booking.filter(updateBk=>updateBk._id!==id)
                const updateBook=booking.find(udate=>udate._id===id)
                 updateBook.status='confirm'
                 const newUpdateBooking=[updateBook,...remaning]
                 setBooking(newUpdateBooking)
            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-10'>Booking Items:{booking.length}</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
 
      <tr className=' w-full'>
        <th className='text-2xl font-bold'></th>
        <th className='text-2xl font-bold'>image</th>
        <th className='text-2xl font-bold'>Service</th>
     
        <th className='text-2xl font-bold'>Date</th>
        <th className='text-2xl font-bold'>Price</th>
        <th className='text-2xl font-bold'>Status</th>
      </tr>
   
    <tbody>
     
     {
        booking.map(book=><UserTableRow key={book._id}book={book} handleDelete={handleDelete}handleUpdate={handleUpdate}></UserTableRow>)
     }
    
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default BookingItem;