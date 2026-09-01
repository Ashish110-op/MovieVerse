import{
    FaInstagram, FaYoutube, FaFacebookF,FaTwitter
}from "react-icons/fa";
import{Link} from "react-router-dom";
import"./footer.css";

export const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return(
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        🎬 Movie <span>Verse</span>
                    </div>
                    <p>Discover anmazing movies and TV shows.
                        Search, explore and find your next favorurite story with MovieVerse.
                    </p>
                    <div className="social-icon">
                        <a href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"><FaInstagram /></a>

                        <a href="https://www.youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Youtube"><FaYoutube /></a>

                        <a href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"><FaFacebookF /></a>

                        <a href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"><FaTwitter /></a>
                    </div>
                </div>
                <div className="footer-link">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/movie">Movies</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-link">
                    <h3>MoviVerse</h3>
                    <Link to="/movie">Trending Movies</Link>
                    <Link to="/movie">Popular Shows</Link>
                    <Link to="/movie">Explore Genres</Link>
                </div>
                <div className="footer-news">
                    <h3>Stay Updated</h3>
                    <p>Get updates about new movies and trending shows.</p>
                    <div className="news-letter">
                        <input type="email"
                        placeholder="Enter your email"/>
                        <button>→</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©{currentYear} MovieVerse.
                    All rights reserved.
                </p>
                <div>
                    <span>Made with💗 for movie lovers</span>
                </div>
            </div>
        </footer>
        </>
    )
}