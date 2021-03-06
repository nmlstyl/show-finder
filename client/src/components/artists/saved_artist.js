import React from 'react'

import { Link } from 'react-scroll'

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
          return <button className='btn-sm' id='pinkButton' onClick={ () => triggerLike() }>Cool ?</button>
        } else {
          return <button className='btn-sm' onClick={ () => triggerLike() }>Cool ?</button>
        }
      } else {
        return <button className='btn-sm' onClick={ () => triggerLike() }>Cool ?</button>
      }
    }

    return(
      <li id="savedArtist">
        <Link activeClass="active" to="artistAnchor" spy={true} smooth={true} duration={1500}>
        <button className='btn btn-default' onClick={ () => props.fetchByArtist(props.name) }>{ props.name }</button>
        </Link>

        &nbsp; <button className='btn-sm' onClick={ () => props.deleteArtist(props.id, userId) }>X</button>
        <br></br><br></br>
        { generateCoolButton() } &nbsp; { calculateLikes() }
      </li>
    )
}

export default SavedArtist
