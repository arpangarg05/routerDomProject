import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import './index.css'
import Location from './Location/Location.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import { Route } from 'react-router-dom'


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/location' element={<Location />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='about' element={<Location />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
