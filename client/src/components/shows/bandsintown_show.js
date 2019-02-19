import React from 'react'

const BandsintownShow = (props) => {
    return(
      <li>
        { props.name }<br></br>
        { props.location }<br></br>
        { props.venue }<br></br>
        { props.date }<br></br>
        { props.time }<br></br>
      <a href={ props.url } target="_blank"><button className='btn-xs'>Link</button></a>
      </li>
    )

}

export default BandsintownShow

// React-Router open Link in new tab
// In current version of React Router, you can use:
//
// <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} />
