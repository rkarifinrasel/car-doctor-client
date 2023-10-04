import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../Provider/AuthProvider';
import SocialMedia from '../../pages/SocialMedia/SocialMedia';
const SignUp = () => {


    const {createUser}=useContext(AuthContext)

    const handleSignUp=event=>{
        event.preventDefault()

        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
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
          <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"  name='name'className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"  name='email'className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
               
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign Up"className="btn btn-primary" />
              </div>
            </div>
            <h1 className='m-8'>Already have an account? <Link to='/login' className='text-sky-600'>Login</Link></h1>
            <div className='mb-10'>
      <SocialMedia></SocialMedia>
      </div>
          </form>
         
        </div>
      </div>
    );
};

export default SignUp;