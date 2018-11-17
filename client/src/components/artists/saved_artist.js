import React from 'react'

const SavedArtist = (props) => {

    return(
      <div className="row artist">
        <h3><a href={'/artistsearch?name=' + props.name }>{ props.name }</a></h3>
      </div>
    )
}

export default SavedArtist
