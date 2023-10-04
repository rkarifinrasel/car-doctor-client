import React, { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';

const SocialMedia = () => {

    const {googleSignIn}=useContext(AuthContext)


    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
              <div className="divider">OR</div>
             <div className='text-center'>
             <button onClick={handleGoogle} className="btn btn-circle btn-outline ">
 G
</button>
             </div>
        </div>
    );
};

export default SocialMedia;