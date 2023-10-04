import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { AuthContext } from '../../components/Provider/AuthProvider';
import SocialMedia from '../SocialMedia/SocialMedia';
const Login = () => {
 

    const {loginUser}=useContext(AuthContext)

    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';

    const handleLogin=event=>{
        event.preventDefault()

        const form=event.target;
       
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        loginUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
           
            form.reset();
            navigate(from,{replace:true})
        })
        .then(error=>{
            console.log(error.message)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
     <img src={loginImg} alt="" srcset="" />
    </div>
    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email"name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login"className="btn btn-primary" />
        </div>
      </div>
      <h1 className='m-8'>New to car-doctor? <Link to='/signup' className='text-sky-600'>Sign Up</Link></h1>
      <div className='mb-10'>
      <SocialMedia></SocialMedia>
      </div>
    </form>

    
  </div>
</div>
    );
};

export default Login;