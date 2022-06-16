import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fs, { read } from 'fs'

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/tetrominos', async (req, res) => {
	try {
		const readData = fs.readFileSync('./data/data.json', 'utf8')
    let result = JSON.parse(readData)
    const tetrominos: string = 'IJLOSTZ'
    const randomTetro: string = tetrominos[Math.floor(Math.random() * tetrominos.length)]
    res.json(result[randomTetro])
	} catch (error) {
		res.send({"something is wrong": error})
	}
})

app.post('/moves', (req: any, res: any) => {
  try {
    if(req.body.direction === 'merged'){  
      res.send({
        message: `You merged your Tetro and generated new one`
      })
    } else if(req.body.direction === 'rotated'){
      res.send({
      message: `You ${req.body.direction} your tetro`
      })
    } else {
      res.send({
        message: `You moved your tetro ${req.body.direction}`
      })
    }
  } catch(error){
    res.send({"something is wrond": error})
  }
})

console.log('saved')
app.listen(8081)