import React from 'react'
import {  Route, Routes } from 'react-router-dom';

import Navbar from './../Navbar/Navbar';
import Home from './../Home/Home';
import Movie from './../Movie/Movie';
import Tv from './../Tv/Tv';
import People from './../People/People';
import About from './../About/About';
import NotFound from './../NotFound/NotFound';
import Network from './../Network/Network';
import Details from './../Details/Details';

export default function App() {
  return (
    <div>
      <Navbar/>

      <div className="container">

    <Routes>
    <Route path='/'  element={<Home/>}> </Route>
      <Route path='Home'  element={<Home/>}> </Route>
      <Route path='Movie'  element={<Movie/>}> </Route>
      <Route path='Details'  element={<Details/>}> </Route>
      <Route path='Tv'  element={<Tv/>}> </Route>
      <Route path='People'  element={<People/>}> </Route>
      <Route path='About'  element={<About/>}> </Route>
      <Route path='Network'  element={<Network/>}> </Route>
      <Route path='*'  element={<NotFound/>}> </Route>
    </Routes>

      </div>
      

    </div>
  )
}
