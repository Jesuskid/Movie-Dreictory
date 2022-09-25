import React, { useEffect, useState } from "react";
import './index.css'
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9dfa6c1c'


const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie",
    Year: "2016",
    imdbID: "tt2975590",
}


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search);
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Justice')
    }, [])

    return (
        <div className="app">
            <h1>Movie Directory</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                <img src={SearchIcon} alt="search"
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>

            {
                movies?.length > 0 ?
                    (<div className="container">
                        {movies.map((movie) =>
                            <MovieCard movie1={movie} />
                        )}
                    </div>) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

            }
        </div>
    )
}
export default App;