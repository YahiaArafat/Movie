import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Home.module.css'

export default function Home() {

  let avatar = './userUn.jpg';
  let [TrendingMovies,setTrendingMovies] =useState([]);
  let [TrendingTv,setTrendingTv]= useState([]);
  let [TrendingPerson,setTrendingPerson]= useState([]);
  let prefix = "https://image.tmdb.org/t/p/w500/" ;
  


  async function getTrengingItems(mediaType,callback){

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=aa717cf4da52c78e8040b5bc788cafe0`);
    callback(data.results);
  }

  useEffect( ()=>{
    getTrengingItems('movie',setTrendingMovies);
    getTrengingItems('tv',setTrendingTv);
    getTrengingItems('person',setTrendingPerson);

   },[]);
  return (

    <>
    <div className="row">
      <div className='col-md-4 d-flex align-items-center'>
        <div>
        <div className={`w-25 ${styles.brdr}`}></div>
        <h2>Trending <br/>Movies<br/> To Watch Now</h2>
        <p>most wahched movies by days</p>
        <div className={`w-100 ${styles.brdr}`}></div>
        </div>
      </div>
      {TrendingMovies.map( (movie,index)=>
      <div className='col-md-2 my-3' key={index}>

        <div className="item">
          <img src={prefix+movie.poster_path} alt='' className='w-100' />
          <h3 className='h5 text-center mt-3'>{movie.name}</h3>
        </div>

      </div>
      )}
    </div>

    <div className={`w-100 ${styles.brdr}`}></div>
    <div className={`w-100 ${styles.brdr}`}></div>

   <div className="row">
<div className='col-md-4 d-flex align-items-center'>
  <div>
  <div className={`w-25 ${styles.brdr}`}></div>
  <h2>Trending <br/>Tv<br/> To Watch Now</h2>
  <p>most wahched Tv by days</p>
  <div className={`w-100 ${styles.brdr}`}></div>
  </div>
</div>
{TrendingTv.map( (movie,index)=>
<div className='col-md-2 my-3' key={index}>

  <div className="item">
    <img src={prefix+movie.poster_path} alt='' className='w-100' />
    <h3 className='h5 text-center mt-3'>{movie.name}</h3>
  </div>

</div>
)}
   </div>

   <div className={`w-100 ${styles.brdr}`}></div>
   <div className={`w-100 ${styles.brdr}`}></div>

   <div className="row">
<div className='col-md-4 d-flex align-items-center'>
  <div>
  <div className={`w-25 ${styles.brdr}`}></div>
  <h2>Trending <br/>Person<br/>On The Movies</h2>
  <p>Who Are The Most Popular People This Month ?</p>
  <div className={`w-100 ${styles.brdr}`}></div>
  </div>
</div>
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
