import React, {useState, useEffect}  from "react";
import './banner.css';
import bgImg from'../images/bg-transformer.jpg';
import movieTitle from'../images/transformer-title.png';

function Banner() {
    const [movies, setMovies] = useState([]);
    
    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(e => console.error(e.message));
    };


    //when page loads
    useEffect(() => {
        fetchData();
    }, []);

    return  (
        <div className="banner">
            <div className="movie">
                <img src={bgImg} alt="{movies[0].title}" className="bgImg active" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="content active">
                                <img src={movieTitle} alt="movie title" className="movie-title"/>
                                <h4>
                                    <span>Year</span>
                                    <span><i>age</i></span>
                                    <span>length</span>
                                    <span>category</span>
                                </h4>
                                <p>description</p>
                                <div className="button">Button</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="date active">
                                <h2>On 12th July</h2>
                            </div>
                            <div className="trailer d-flex align-items-center justify-content-center active">
                                <a href="" className="playBtn">
                                    <ion-icon name="play-outline"></ion-icon>
                                </a>
                                <p>Watch Trailer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
