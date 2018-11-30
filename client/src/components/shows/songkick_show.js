import React from 'react'

const SongkickShow = (props) => {

    return(
      <li>
        { props.name }<br></br>
        { props.location }<br></br>
        { props.venue }<br></br>
        { props.date }<br></br>
        { props.time }<br></br>
      </li>
    )

}

export default SongkickShow
