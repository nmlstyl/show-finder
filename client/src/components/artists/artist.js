import React from 'react'

const Artist = (props) => {
    return(
      <div class="artist">
        { props.name }<br></br>
      { props.touringUntil }
      </div>
    )
}

export default Artist
