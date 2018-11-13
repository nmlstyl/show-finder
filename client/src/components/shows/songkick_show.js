import React from 'react'

const SongkickShow = (props) => {

    return(
      <div className='songkickShow'>
        { props.name }<br></br>
        { props.location }<br></br>
        { props.venue }<br></br>
        { props.date }<br></br>
        { props.time }<br></br>
      </div>
    )

}

export default SongkickShow
