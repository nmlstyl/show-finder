import React from 'react'

const Navbar = (props) => {

    function endSession(){
      props.cookieAccess.remove('id', null, { path: '/' });
    }

    function generateLogoutButton(){
        if (isLoggedIn()){
          return <button type="button" onClick={ () => endSession() } className="btn btn-default navbar-btn">Logout</button>
        }
    }

    function generateSavedBandsButton(){
      if (isLoggedIn()){
        return <a href="/"><button type="button" className="btn btn-default navbar-btn"><span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> &nbsp; My Saved Bands</button></a>
      }
    }

    function generateLoginButton(){
      if (isLoggedIn() === false){
        return <a href="/login"><button type="button" className="btn btn-default navbar-btn">Login</button></a>
      }
    }

    function generateSignupButton(){
      if (isLoggedIn() === false){
        return <a href="/signup"><button type="button" className="btn btn-default navbar-btn">Signup</button></a>
      }
    }

    function isLoggedIn(){
      if (Object.keys(props.cookieAccess.cookies).length !== 0){
        return true
      } else {
        return false
      }
    }

    return(
        <header><h1><strong><em>S H O W &nbsp; F I N D E R</em></strong></h1>
          <nav className="navbar">
            <a href="/artistsearch"><button type="button" className="btn btn-default navbar-btn"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> &nbsp; Search By Artist</button></a>

            { generateSavedBandsButton() }

            { generateLoginButton() }

            { generateSignupButton() }

            { generateLogoutButton() }
          </nav>
        </header>
    )
}

export default Navbar
