import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import Home from './pages/Home/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProvider from './components/Provider/AuthProvider.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import Booking from './pages/Booking/Booking.jsx'
import BookingItem from './pages/BookingItem/BookingItem.jsx'
import PrivateRouts from './components/Routs/PrivateRouts.jsx'




const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/checkout/:id',
        element:<Checkout></Checkout>,

      loader:({params})=>fetch(`http://localhost:5000/carsCollection/${params.id}`)
      },
      {
        path:'booking/:id',
        element:<PrivateRouts><Booking></Booking></PrivateRouts>,
        loader:({params})=>fetch(`http://localhost:5000/carsCollection/${params.id}`)
      },
      {
        path:'bookingitem',
        element:<PrivateRouts><BookingItem></BookingItem></PrivateRouts>
      }
    
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w max-w-screen-xl mx-auto'>
    <React.StrictMode>
  <AuthProvider> <RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
  </div>
)
