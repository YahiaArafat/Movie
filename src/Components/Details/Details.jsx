import React , {useEffect, useState}from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'


export default function Details() {
    let [Details,setDetails] = useState([]);
    let [SearchParams,setSearchParams] = useSearchParams();
    let CurrentId = SearchParams.get('id');
    let prefix = "https://image.tmdb.org/t/p/w500/" ;

     async  function getDetails(){
      let  {data} = await axios.get(`https://api.themoviedb.org/3/movie/${CurrentId}?api_key=aa717cf4da52c78e8040b5bc788cafe0&language=en-US`);
      setDetails(data);
    }
    useEffect( ()=>{
        getDetails();
    },[] )

  return (
    <>
    <div className="row">
        <div className="col-md-4 p-4">
        <img src={prefix+Details.poster_path} alt='' className='w-100' />
        </div>

        <div className="col-md-8 p-5">
        <h2>{Details.original_title}</h2>
        <p>{Details.media_type}</p>
        <p>{Details.overview}</p>
        <p> <span className='bg-danger' >Vote  :</span> {Details.vote_average}</p>
        <p><span className='bg-danger' >Count :</span> {Details.vote_count}</p>
        <img src={prefix+Details.backdrop_path}alt='' className='w-20 ' />
        </div>
        

    </div>
   
    </>
  )
}
