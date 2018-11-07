import React from 'react'

const Navbar = () => {
    return(
        <header><h1>SHOW FINDER</h1>
          <nav class="navbar navbar-default">
              <div class="container-fluid">

                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="/">Home</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="/artistsearch"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> &nbsp; Search By Artist</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    )
}

export default Navbar
