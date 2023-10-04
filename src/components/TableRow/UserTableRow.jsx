import React from 'react';

const UserTableRow = ({book,handleDelete,handleUpdate}) => {
    const {_id,name,price,email,img,title,date,status}=book;



  

  
    return (
  <>
         
      <tr className='w-full'>
        <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-40 h-40">
                <img src={img}/>
              </div>
            </div>
            
          </div>
        </td>
       
        <td className='text-2xl '>{title}</td>
        <td className='text-2xl '>{date}</td>
        <td className='text-2xl '>{price}</td>
      {
        status ==='confirm'?<span className='text-primary font-bold text-2xl  flex justify-center items-center'>Confirm</span>: <button onClick={()=>handleUpdate(_id)} className='bg-lime-600 text-center  btn  btn-outline align-middle'>Please Confirm</button>
      }
       
      </tr>
      </>
    );
};

export default UserTableRow;