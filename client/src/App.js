import premlogo from './premlogo.png';
import son from './son.png';
import salah from './salah.png';
import penaldo from './penaldo.png';
import tomkins from './tomkins.png'
import './App.css';
import React, {useState} from 'react'
import Player from './Player'
import Search from './Search'

function App() {

  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');

  const [players, setPlayers] = useState([
    {
      pic: son,
      title: "Heung-min Son",
      club: "Spurs",
      country: "South Korea",
      appearances: "209",
      goals: "74",
      assists: "40"
    },
    {
      pic: salah,
      title: "Mohamed Salah",
      club: "Liverpool",
      country: "Egypt",
      appearances: "171",
      goals: "108",
      assists: "42"
    },
    {
      pic: penaldo,
      title: "Cristiano Ronaldo",
      club: "Manchester United",
      country: "Portugal",
      appearances: "206",
      goals: "88",
      assists: "36"
    },
    {
      pic: tomkins,
      title: "James Tomkins",
      club:"Crystal Palace",
      country: "England",
      appearances: "274",
      goals: "12",
      assists: "7"
    }
  ])
  
  const filterPlayers = (players, query) => {
    if (!query) {return players}
  
    return players.filter((player) => {
      const playerName = player.title.toLowerCase()
      return playerName.includes(query)
    })
  }
  
  const [searchQuery, setSearchQuery] = useState(query || '')
  const filteredplayers = filterPlayers(players, searchQuery)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Premier League Player Database</h1>
        <img src={premlogo} className="logo" />
        <p>
          Welcome to the Premier League Player Database
        </p>
        <h2>players</h2>
        <Search 
          searchQuery = {searchQuery}
          setSearchQuery = {setSearchQuery}
        />
        <table>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Club</th>
            <th>Country</th>
            <th>Appearances</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Likes</th>
          </tr>
          {filteredplayers.map((player) => 
          <Player 
            pic = {player.pic}
            title = {player.title}
            club = {player.club}
            country = {player.country}
            appearances = {player.appearances}
            goals = {player.goals}
            assists = {player.assists}
          />
          )}
          
        </table>
        <h2>Premier League Table</h2>
        <table>
          <tr>
          <th></th>
          <th></th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>P</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Chelsea</th>
            <th>9</th>
            <th>3</th>
            <th>1</th>
            <th>31</th>
            <th>5</th>
            <th>+26</th>
            <th>30</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Manchester City</th>
            <th>9</th>
            <th>2</th>
            <th>2</th>
            <th>27</th>
            <th>7</th>
            <th>+20</th>
            <th>29</th>
          </tr>
          <tr>
            <th>3</th>
            <th>Liverpool</th>
            <th>8</th>
            <th>4</th>
            <th>1</th>
            <th>39</th>
            <th>11</th>
            <th>+28</th>
            <th>28</th>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
