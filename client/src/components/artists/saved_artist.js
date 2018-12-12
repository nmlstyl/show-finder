import React from 'react'

const SavedArtist = (props) => {

    const userId = props.cookieAccess.cookies.id

    const triggerLike = () => {
      props.likeAction( props.id, userId)
    }

    const calculateLikes = () => {
      return props.likes.filter(like => like.switch === 'true').length
    }

    const generateCoolButton = () => {
      let thisUsersLike = props.likes.find(like => like.user_id === parseInt(userId))

      if (thisUsersLike !== undefined){
        if (thisUsersLike.switch === 'true'){
          return <button className='btn-xs' id='pinkButton' onClick={ () => triggerLike() }>Cool ?</button>
        } else {
          return <button className='btn-xs' onClick={ () => triggerLike() }>Cool ?</button>
        }
      } else {
        return <button className='btn-xs' onClick={ () => triggerLike() }>Cool ?</button>
      }
    }

    return(
      <li id="savedArtist">
        <button className='btn btn-default' onClick={ () => props.fetchByArtist(props.name) }>{ props.name }</button>
        &nbsp; <button className='btn-xs' onClick={ () => props.deleteArtist(props.id, userId) }>X</button>
        <br></br><br></br>
        { generateCoolButton() } &nbsp; { calculateLikes() }
      </li>
    )
}

export default SavedArtist
