import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Movie.module.css'
import { useNavigate } from 'react-router-dom'



export default function Movie() {
  let Navigate = useNavigate();
  function goToDetail(id){
    Navigate({
      pathname:'/details',
      search:`?id=${id}`
    })

  }
  let avatar = './userUn.jpg';
  let prefix = "https://image.tmdb.org/t/p/w500/" ;
  let [TrendingMovies,setTrendingMovies] =useState([]);
  async function getTrengingItems(){

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=aa717cf4da52c78e8040b5bc788cafe0`);
    setTrendingMovies(data.results);
  }

  useEffect( ()=>{
    getTrengingItems();
   

   },[]);
  return (
    <>
    <div className="row">
   
   <h1 className='text-center p-4'>Trending Movies<br/> To Watch Now most wahched movies by days</h1>
    <div className={`w-100 ${styles.brdr}`}></div>
    {TrendingMovies.map( (movie,index)=>
    <div className='col-md-2 my-4' key={index}>

      <div className="item">
        <img src={prefix+movie.poster_path} alt='' className='w-100' />
        <h3 className='h5 text-center mt-3' onClick={()=>goToDetail(movie.id)}>{movie.title}</h3>
      </div>

    </div>
    )}
  </div>
  </>
  )
}
