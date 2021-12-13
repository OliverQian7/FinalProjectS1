const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static('./client/build'))
app.use(express.json())

//gets the entire player table from the database
app.get('/players',(req,res) => {
    const query = db.prepare("SELECT * FROM players")
    const players = query.all()
    res.json({
        players
    })
})

//increments likes for a player up by 1
app.post("/like",(req,res) => {
    const {id} = req.body
    console.info(typeof id, req.body)
    const qlikes = db.prepare(`SELECT likes FROM players WHERE id = ?`)
    const likes = qlikes.get(id).likes
    const query = db.prepare(`UPDATE players 
    SET likes = ?
    WHERE id = ?`)
    const result = query.run(likes+1,id)
    console.log(`liked ${result.changes} player(s)`)
    res.json({
        numLiked: result.changes,
        id
    })
})

//increments likes for a player down by 1
app.post("/dislike",(req,res) => {
    const {id} = req.body
    const query = db.prepare(`UPDATE players 
    SET likes = likes - 1 
    WHERE id = ?`)
    const result = query.run(id)
    console.log(`disliked ${result.changes} player(s)`)
    res.json({
        didDisike: result.changes, 
        id
    })
})

app.listen(8080,() => {
    console.log("h")
})