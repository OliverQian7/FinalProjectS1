import React, {useState} from 'react'

function Player({key, id, pic, title, club, country, appearances, goals, assists, likes, setlikes, dislike}) {
//const img = require (pic)

    return (
        <tr>
        <th id = "playerpic"><img src = {`/%PUBLIC_URL%/images/${pic}`} id = "playerpiture" /></th>
        <th>{title}</th>
        <th>{club}</th>
        <th>{country}</th>
        <th>{appearances}</th>
        <th>{goals}</th>
        <th>{assists}</th>
        <th> {likes} <br></br>   <input type = "submit" value = "Like" onClick = {() => {
          setlikes(id)
          fetch('/like').then(res => res.json())
        }} id = "buttonn" /><br></br><input type = "submit" value = "Dislike" onClick = {() => {
          dislike(id)
          fetch('/dislike')
        }} id = "buttonn" /></th>
      </tr>
    )
}

export default Player
