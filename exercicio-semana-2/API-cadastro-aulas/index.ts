import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import * as note from './controllers/note'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 4000

app.use(express.static('www'))
//aulas
app.get('/notes', note.list)
app.get('/notes/:id', note.get)
app.post('/notes', note.create)
app.put('/notes', note.update)
app.delete('/notes/:id', note.remove)

//login
app.get('/users', note.search)
app.post('/users', note.createUser)


app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})

