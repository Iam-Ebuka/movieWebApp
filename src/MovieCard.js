import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './MovieCard.css'
import { Link } from 'react-router-dom';



const MovieCard = (props) => {

  const [likeIt, setLikeIt] = useState(false);

  // Toggle the like button state
 const likeBotton = () => {
  setLikeIt(!likeIt)
  
}

  const  API_IMG ="https://image.tmdb.org/t/p/original/"


  return (
    <div className='container'>
    <p  id='like' onClick={likeBotton}>
      {likeIt ? 
      // Render the filled heart icon when liked
      <FaHeart className="love" style={{fontSize: "30px", color: '#be123c', zIndex: '3', fontWeight: 'bolder', cursor: 'pointer' }} />
       : 
       // Render the outline heart icon when not liked
       <FaRegHeart style={{fontSize: "30px", color: '#be123c', zIndex: '3', fontWeight: 'bolder', cursor: 'pointer' }} />
        }
    </p>
    <Link className="linkCard" to={`movies/${props.id}`}>
        <div className='card' data-testid="movie-card" >
        
            <div className='poster'>
                <img   data-testid='movie-poster' src={props.poster_path ? API_IMG + props.poster_path : "https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80" } alt="movies"/>
            </div>

            <div className='info'>
                <h3 className='title' data-testid='movie-title'>{props.title}</h3>
                <p className='release-date' data-testid='movie-release-date'>Release Date: {props.release_date}</p>
            </div>
        </div>
    </Link>
   </div>
  )
}

export default MovieCard