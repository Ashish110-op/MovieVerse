import { useLoaderData, Link } from "react-router-dom";
import"./home.css"

export const homeLoader = async () => {

        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();
        return data.slice(0, 4)
   
}

export const Home = () => {
    const movies = useLoaderData();
    return (
        <>
            <section className="home-hero">
                <div className="hero-content">
                    <span className="hero-tag">
                        🎬 YOUR MOVIE UNIVERSE
                    </span>
                    <h1>Discover Your Next <span>Favourite Storie.</span></h1>
                    <p>Explore Amazing Movies And TV shows, discover new
                        genres, and Search for your favourite entertainment.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/movie" className="explore">Explore Movies →</Link>
                    </div>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-heading">
                    <div><span>
                        🔥TRENDING NOW
                    </span>
                        <h2>Featured Shows</h2>
                    </div>
                    <Link to="/movie" className="view">View All</Link>
                </div>
                <div className="feature-movie">
                    {
                        movies.map((movie) => {
                            const { id, image, name, rating, genres } = movie;
                            return (
                                <div className="feature-card" key={id}>
                                    <img src={image.medium

                                    } alt={name}/>

                                    <div className="feature-info">
                                        <h3>{name}</h3>
                                        <p>🌟 {rating.average}</p>
                                        <span>{genres.slice(0,2).join(".")}</span>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
            <section className="features-section">
                <div className="section-h">
                    <span>WHY MOVIE WORLD?</span>
                    <h2>Everything You Need To Explore Entertainment</h2>
                    <p>
                        Search, explore and discover 
                        your favourite shows.
                    </p>
                    <div className="features">
                        <div className="features-card">
                            <div className="features-icon">🔍
                            </div>
                                <h3>Smart Search</h3>
                                <p>
                                    Find your favourite movies and shows instantly.
                                </p>
                        </div>

                        <div className="features-card">
                            <div className="features-icon">🎬
                            </div>
                                <h3>Explore Shows</h3>
                                <p>
                                   Discover new stories and entertainment.
                                </p>
                        </div>

                        <div className="features-card">
                            <div className="features-icon">🌟
                            </div>
                                <h3>Rating</h3>
                                <p>
                                    Check rating and information about shows.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta">
                <h2>Ready To Find your Next Favourite shows?</h2>
                <p>Your next favourite story is waiting for you</p>
                <Link to="/movie">Start Exploring →</Link>
            </section>
        </>

    )
}