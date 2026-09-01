import { NavLink } from "react-router-dom"
import "./header.css"
export const Header = () =>{
    return(
        <>
        <header className="main-header">
            <div className="logo">
                <span className="logo-icon">🎬</span>
                <h2>Movie <span>Verse</span></h2>
            </div>
            <nav className="navbar">
                <NavLink to="/"
                className={({isActive})=>
                isActive? " nav-link active":"nav-link"}>Home</NavLink>

                 <NavLink to="/about"
                className={({isActive})=>
                isActive? " nav-link active":"nav-link"}>About</NavLink>

                 <NavLink to="/movie"
                className={({isActive})=>
                isActive? " nav-link active":"nav-link"}>Movies</NavLink>

                 <NavLink to="/contact"
                className={({isActive})=>
                isActive? " nav-link active":"nav-link"}>Contact</NavLink>
            </nav>
            <NavLink to="/movie"className="h-btn">Explore→</NavLink>
        </header>
        </>
    )
}