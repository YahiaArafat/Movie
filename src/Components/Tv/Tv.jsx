import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Tv.module.css'

export default function Tv() {
  let avatar = './userUn.jpg';
  let prefix = "https://image.tmdb.org/t/p/w500/" ;
  let [TrendingTv,setTrendingTv]= useState([]);

  async function getTrengingItems(){

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=aa717cf4da52c78e8040b5bc788cafe0`);
    setTrendingTv(data.results);
  }

  useEffect( ()=>{
    getTrengingItems();

   },[]);

  return (
    <>
     <div className="row">
     <h1 className='text-center p-4'>Trending Tv<br/> To Watch Now most wahched Tv by days</h1>
    <div className={`w-100 ${styles.brdr}`}></div>

{TrendingTv.map( (movie,index)=>
<div className='col-md-2 my-3' key={index}>

  <div className="item">
    <img src={prefix+movie.poster_path} alt='' className='w-100' />
    <h3 className='h5 text-center mt-3'>{movie.name}</h3>
  </div>

</div>
 )}
   </div>
    </>
  )
}
