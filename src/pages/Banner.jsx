import React, { useState, useEffect } from "react";
import './banner.css';
import bgImg from '../images/bg-transformer.jpg';
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayButton from "../components/PlayButton";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    // Fetch movie data
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/data/movieData.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const data = await response.json();
            setMovies(data);
        } catch (err) {
            console.error("Fetch Error:", err.message);
            setError(err.message);
        }
    };

    // When page loads
    useEffect(() => {
        fetchData();
    }, []);

    // Handle slide changes (example for logging slide change)
    const handleSlideChange = id => {
        const newMovies = movies.map(movie => {
            movie.active = false;
            if (movie._id === id) {
                movie.active = true;
            }
            return movie;
        });
        setMovies(newMovies);
    };

    // If there's an error fetching the data, show an error message
    if (error) {
        return (
            <div className="banner">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="banner">
            {
                movies && movies.length > 0 && movies.map(movie => (
                    <div className="movie">
                        <img src={movie.bgImg} alt={movies[0]?.title || "Default Movie"} className={`bgImg ${movie.active ? 'active' : undefined}`} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie} />
                                    <PlayButton movie={movie} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


            {/* Conditional rendering of MovieSwiper if movies are available */}
            {movies && movies.length > 0 ? (
                <MovieSwiper slides={movies} slideChange={handleSlideChange} />
            ) : (
                <p>Loading movies...</p>
            )}
        </div>
    );
}

export default Banner;
