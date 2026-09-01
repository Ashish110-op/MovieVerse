import{useLoaderData} from "react-router-dom";
import "./movies.css"
import { useState } from "react";
export const movieLoder =async () =>{
    const res = await fetch("https://api.tvmaze.com/shows")
    const data =await res.json();
    
    return data;
    // console.log(data);
};
const Movies = () =>{
    const movies = useLoaderData();
    const[search, setSearch]=useState("");
    const[category, setCategory]=useState("All");
    const[watchList, setWatchList]=useState([]);

    const addToWatch =(movie)=>{
        const allReadyAdded = watchList.find(
            (item)=>item.id ===movie.show.id
        );
        if(allReadyAdded){
            alert("Already added to watchlist💗");
            return;
        }
        setWatchList([...watchList, movie]);
        alert(`${movie.show.name} added to watchlist💗`)
    }
    const filterMovies = 
    movies?.filter((movie)=>{
        const searchMatch=movie.name.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = category ==="All" || movie.genres.includes(category);
        return searchMatch && categoryMatch;
    });
    return(
        <>
        <section className="movies-section">
            <h1>Movies & Shows</h1>
            <nav className="movie-nav">
                <button className={category ==="All" ? "active":""} onClick={()=>setCategory("All")}>All</button>
                 <button className={category ==="Drama" ? "active":""} onClick={()=>setCategory("Drama")}>Drama</button>
                  <button className={category ==="Comedy" ? "active":""} onClick={()=>setCategory("Comedy")}>Comedy</button>
                   <button className={category ==="Horror" ? "active":""} onClick={()=>setCategory("Horror")}>Horror</button>
                    <button className={category ==="Action" ? "active":""} onClick={()=>setCategory("Action")}>Action</button>
            </nav>
            <div className="search-box">
                <input type="text"
                placeholder="Search movie..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className="movie-container">
                {
                    filterMovies?.slice(0, 200).map((movie)=>{
                        const {id, name, image, rating, genres, language, url}=movie;
                        return(
                            <div key={id} className="movie-card">
                                <img src={image.medium} alt={name}/>
                                <div className="movi-info">
                                    <h2>{name}</h2>
                                    <p>🌟Rating: {rating.average}</p>
                                    <p>Language: {language}</p>
                                    <p>Generes: {genres.join(",")}</p>
                                    <div className="movie-button">
                                        <a href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="watch-btn">▶ Watch Now</a>

                                         <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(name + "official trailer")}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="trailer-btn">🎬Watch Trailer</a>
                                        <button className="watchlist-btn" onClick={()=>addToWatch(movie)}>Add watchlist</button>
                                    </div>
                                </div>
                                </div>
                        );
                        
                    })}
            </div>
        </section>
        </>
    )
}
export default Movies;