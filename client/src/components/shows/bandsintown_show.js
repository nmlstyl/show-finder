import React from 'react'

const BandsintownShow = (props) => {
    return(
      <div className='bandsintownShow'>
        { props.name }<br></br>
        { props.location }<br></br>
        { props.venue }<br></br>
        { props.date }<br></br>
        { props.time }<br></br>
      </div>
    )

}

export default BandsintownShow