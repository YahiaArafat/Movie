import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './People.module.css'

export default function People() {

  let avatar = './userUn.jpg';
  let prefix = "https://image.tmdb.org/t/p/w500/" ;
  let [TrendingPerson,setTrendingPerson]= useState([]);

  
  async function getTrengingItems(){

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=aa717cf4da52c78e8040b5bc788cafe0`);
    setTrendingPerson(data.results);
  }

  useEffect( ()=>{
    getTrengingItems('person',setTrendingPerson);

   },[]);

  return (
    <>
     <div className="row">
     <h1 className='text-center p-4'>Trending People<br/> Who Are The Most Popular People This Month ?</h1>
    <div className={`w-100 ${styles.brdr}`}></div>

{TrendingPerson.map( (movie,index)=>
<div className='col-md-2 my-3' key={index}>

  <div className="item">
    <img src={movie.profile_path?prefix+movie.profile_path:avatar} alt='' className='w-100' />
    <h3 className='h5 text-center mt-3'>{movie.name}</h3>
  </div>

</div>
)}
   </div>
    </>
  )
}
