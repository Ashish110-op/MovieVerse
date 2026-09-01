import"./about.css"

export const About = () =>{
    return(
    <>
   <main   className="about-page">
    <section   className="about-hero">
        <div  className="hero-overlay"></div>
        <div  className="abot-hero-content">
            <span   className="hero-tag">🎬 WELCOME TO OUR WORLD</span>
            <h1>Where Every Story <span> Comes Alive.</span></h1>
            <p>Discover movies, explore new Shows and find your next favourite story - all in one beautyful place</p>
            <div  className="hero-button">
                <a href="/movie"   className="primary-btn">Explore Movies →</a>
                <a href="#story"   className="secondary-btn">Our Story</a>
            </div>
        </div>
    </section>
    <section className="about-into" id="story">
        <div className="intro-text">
            <span className="section-label">WHO WE ARE</span>
            <h2>More Than Just <span>Movies</span></h2>
            <p>We created this platform for people who love discovering stories.
                Whether you're searching for a new movie, exploring popular Showsor building your watchlist,
                everything is designed to make your experience simple and enjoyable.
            </p>
            <p className="text">Our goal is simple - make discovering entertainment exciting, fast and beautiful.</p>
            <a href="/movie" className="text-btn">Start Exploring →</a>
        </div>
        <div className="intro-visual">

        <div className=" floating-card card-one">
            🎬
            <span>Discover</span>
        </div>
        <div className=" floating-card card-two">
            🌟
            <span>Rating</span>
        </div>
        <div className=" floating-card card-three">
            💗
            <span>Watchlist</span>
        </div>
        <div className="circle-poster">
            <div className="circle-content">
                <span>YOUR</span>
                <strong>STORY</strong>
                <small>STARTS HERE</small>
            </div>
        </div>
        </div>
    </section>
    <section className="stat-section">
        <div className="stat-box">
            <h3>1000+</h3>
            <p>Movies & Shows</p>
        </div>
        <div className="stat-box">
            <h3>50+</h3>
            <p>Genres</p>
        </div>
        <div className="stat-box">
            <h3>24/7</h3>
            <p>Entertainment</p>
        </div>
        <div   className="stat-box">
            <h3>♾️</h3>
            <p>Stories To Discover</p>
        </div>
    </section>
    <section className="differ-section">
        <div className="section-heading">
            <span  className="section-label">WHY US?</span>
            <h2>What Make Us <span>Different?</span></h2>
            <p>Everything you need to make your movie dicovery experience better</p>
        </div>
        <div className="differ-grid">
            <div className="differ-card">
                <div className="differ-icon">🔍</div>
                <h3>Smart Discovery</h3>
                <p>Search and discover movies and shows without wasting your time.</p>
            </div>
              <div className="differ-card">
                <div className="differ-icon">💖</div>
                <h3>Your Watchlist</h3>
                <p>Keep your favourite movies togther and dicide what you want to watch next.</p>
            </div>
              <div className="differ-card">
                <div className="differ-icon">⚡</div>
                <h3>Fast Experience</h3>
                <p>A clesn and responsive interface designed for smooth browsing.</p>
            </div>
              <div className="differ-card">
                <div className="differ-icon">🎭</div>
                <h3>Every Kind of Story</h3>
                <p>From comedy to drama, action to adventure - there is always something new to explore.</p>
            </div>
        </div>
    </section>
    <section className="journey-section">
        <div className="section-heading">
            <span className="section-label">YOUR JOURNEY</span>
            <h2>Discover. <span>Watch. Enjoy.</span></h2>
        </div>
        <div className="journey">

        <div className="journey-step">
            <span className="step-number">01</span>
            <div>
                <h3>Discover</h3>
                <p>Search for something that catches your eye.</p>
            </div>
        </div>
        <div className="journey-line"></div>
        <div className="journey-step">
            <span className="step-number">02</span>
            <div>
            <h3>Choose</h3>
            <p>Explore ratings, genres and details.</p>
            </div>
            
        </div>

          <div className="journey-line"></div>
        <div className="journey-step">
            <span className="step-number">03</span>
            <div>
            <h3>Enjoy</h3>
            <p>Watch the trailer and add it to your list.</p>
            </div>
        </div>
        </div>
    </section>
    <section className="about-cta">
        <div className="cta-content">
            <span>🍿YOUR NEXT FAVOURITE STORY IS WAITING</span>
            <h2>Ready to find your <strong>next obsession</strong></h2>
            <p>Explore our collection and discover something worth watching tonight.</p>
            <a href="/movie" className="cta-btn">Explore Movies🎬</a>
        </div>
    </section>
   </main>
    </>

    )
}