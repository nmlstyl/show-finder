import React from 'react'

const Navbar = () => {
    return(
        <header><h1><strong><em>S H O W &nbsp; F I N D E R</em></strong></h1>
          <nav className="navbar">
            <a href="/login"><button type="button" className="btn btn-default navbar-btn">Login</button></a>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <a href="/artistsearch"><button type="button" className="btn btn-default navbar-btn"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> &nbsp; Search By Artist</button></a>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <a href="/"><button type="button" className="btn btn-default navbar-btn"><span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> &nbsp; My Saved Bands</button></a>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <a href="/signup"><button type="button" className="btn btn-default navbar-btn">Signup</button></a>
          </nav>
        </header>
    )
}

export default Navbar
