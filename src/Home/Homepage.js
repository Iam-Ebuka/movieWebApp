import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Footer from '../Footer';
import MovieCard from '../MovieCard';



const Home = () => {
  // API endpoints for fetching top-rated movies and searching movies
  const API_URL ="https://api.themoviedb.org/3/movie/top_rated?api_key=260202047b59e7898fe4ef338dd8f84a";
  const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=260202047b59e7898fe4ef338dd8f84a&query=";

  const [topMovies, setTopMovies] = useState([]);
  const [term, setTerm] = useState('');
  const [error, setError] = useState(null)


  useEffect(()=>{
    fetch(API_URL)
    .then(res => {
      if(!res.ok) {
        throw new Error('Error! Check your network connection')
      }
      return res.json()})
    .then(data => { 
      setTopMovies(data.results.slice(0, 10))
      setError(null);
  })
    .catch(err => {
      setError(err.message)
    }) }, [])

    if (error) {
      // Display the fetch error
      return (
        <div>
          <div className="errorAndLoading">{error}</div>
        </div>
      );
    }

    if (!topMovies) {
      return <div className='errorAndLoading'>Loading...</div>;
    }


// Handle the movie search when the user submits the form
const handleSearch = (e) => {
  e.preventDefault()
  fetch(API_SEARCH + term)
  .then(res => res.json())
  .then(data => setTopMovies(data.results))
}


  

  return (
    <div className="App">
      
     {/* ... Header section ... */}   
    <div className='searchNav'>

      {/*... Logo of the page ... */}
      <div className='page-title'>
        <Link  to={ "/" } className='link'>  
        Movie Box
        </Link>
      </div>

      <div className='search'>
      <form onSubmit={handleSearch}>
      <input placeholder='Search' onChange={(e) => setTerm(e.target.value)} />
      </form>
      </div>

      <div ><p className='sign'>Sign in</p></div>
    </div>
    {/* ... Hero section with its contents inside ... */}
    <div className='HeroSec'>
      <h3 className='heroTopic'>Deadpool</h3>
      <p className='heroText'>A weary Wolverine finds himself recovering<br /> from his injuries when he comes across<br /> a loudmouth Deadpool who has time<br /> travelled forward to heal...</p>
      <button>Watch Trailer</button>
    </div>
    
      {/* Top Rated section */}
      <div id='topRated'><h2>Top Rated</h2></div>
      {error && <div className='errorAndLoading'> { error } </div>}
      <div className='bodySec'>
        <div className='tile'>
              {topMovies.map((movie, index) => <MovieCard key={movie.id} {...movie}/>)}
            
        </div>
      </div>
       <Footer />
    </div>
  );
}

export default Home;
