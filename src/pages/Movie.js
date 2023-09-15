import React from "react"
import "./Movie.css"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "../Footer";



const Movie =() => {
 const {id} = useParams()

 const [movieData, setMovieData] = useState('');
 const [error, setError] = useState(null)

  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=260202047b59e7898fe4ef338dd8f84a`;

  // Fetch movie data when the component mounts
  // Handle errors if the fetch fails
  // ...
  useEffect(() => {
    
      fetch(movieUrl)
      .then(res =>{ 
        if(!res.ok) {
          throw new Error('Error! Check your network connection')
        }
        return res.json()})
      .then(data =>{ 
        setMovieData(data);
        setError(null); })
     .catch(err => {
          setError(err.message)
        })
  }, [movieUrl]);

  if (error) {
    // Display the fetch error
    return (
      <div>
        <div className="errorAndLoading">{error}</div>
      </div>
    );
  }

  if (!movieData) {
    return <div className="errorAndLoading">Loading...</div>;
  }


  const backdropImageUrl = `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;
 
  const releaseDate = new Date(movieData.release_date);
  const year = releaseDate.getUTCFullYear();
  const month = (releaseDate.getUTCMonth() + 1).toString().padStart(2, '0'); 
  const day = releaseDate.getUTCDate().toString().padStart(2, '0');
  const utcDate = `${year}-${month}-${day}`;

// Section 1: Header that contains logo, search and sign in
const headerSection = (
  <div className='searchNav'>
    <div className='page-title'>
      <Link to={"/"} className='link'>
        Movie Box
      </Link>
    </div>
    <div className='search'>
      <form>
        <input placeholder='Search' />
      </form>
    </div>
    <div>
      <p className='sign'>Sign in</p>
    </div>
  </div>
);

 // Section 2: Movie Banner
 const bannerSection = (
  <div
    className="movieBanner"
    style={{ backgroundImage: `url(${backdropImageUrl})` }}
  >
    <i
      style={{
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '15vw',
        position: 'relative',
      }}
      className="fa fa-play-circle"
    ></i>{' '}
  </div>
);

  // Section 3: Movie Content Briefs
  const briefSection = (
    <div className='movieBrief'>
      <h1 className="movieTitle" data-testid="movie-title">{movieData.title}</h1>
      <p data-testid="movie-release-date">Release Date: {utcDate}</p>
      <p data-testid="movie-runtime">Run Time: {movieData.runtime} minutes</p>
      <p data-testid="movie-overview" id="overview">{movieData.overview}</p>
    </div>
  );

  return (
    <div style={{position: 'relative'}}>
      {error && <div className="errorAndLoading"> { error } </div>}
      {headerSection}
      {bannerSection}
      {briefSection}
      <Footer />
  </div>
  )
}

export default Movie