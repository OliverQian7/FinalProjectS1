import React, {useState} from 'react'

function Player({pic, title, club, country, appearances, goals, assists, likeText}) {

  const[likes, setlikes] = useState(0)

    return (
        <tr>
        <th id = "playerpic"><img src = {pic} id = "playerpiture" /></th>
        <th>{title}</th>
        <th>{club}</th>
        <th>{country}</th>
        <th>{appearances}</th>
        <th>{goals}</th>
        <th>{assists}</th>
        <th>{likeText} {likes}    <input type = "submit" value = "Like" onClick = {() => {
          setlikes(likes+1)
        }} /><br></br><input type = "submit" value = "Dislike" onClick = {() => {
          setlikes(likes-1)
        }} /></th>
      </tr>
    )
}

export default Player
