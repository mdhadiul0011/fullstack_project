import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Registration from '../pages/registration';
import Otp from '../pages/otp';
import Login from '../pages/login';
import Home from '../pages/home';
import Emailverificationlink from '../pages/emailverificationlink';
import Resendtoken from '../pages/resendtoken';



function App() {

  // const router = createBrowserRouter([
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/registration' element={<Registration/>}/>
  //     </Route>
  //   )
  // ])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Registration />}/>
        <Route path="/otp/:email" element={<Otp />}/>
        <Route path="/emailverify/:token" element={<Emailverificationlink />}/>
        <Route path="/resendtoken" element={<Resendtoken />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Route>
    )
  );

  
  return (
    <>

    <RouterProvider router={router} />
    </>
  )
}

export default App
