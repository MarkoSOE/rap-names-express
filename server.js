const { request, response } = require('express')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todolist'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(request, response)=>{
    db.collection('todoitems').find().toArray()
    .then(data => {
        response.render('index.ejs', { info:data })
    })
    .catch(error => console.error(error))
})

app.post('/additem',(request,response) =>{
    db.collection('todoitems').insertOne({title: request.body.todoTitle, 
    body: request.body.todoContent})
    .then(result =>{
        console.log('added item')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.delete('/deleteItem', (request, response) => {
    db.collection('todoitems').deleteOne({title: request.body.iTitle})
    .then(result => {
        console.log('Item Deleted')
        response.json('Item Deleted')
    })
    .catch(error => console.error(error))

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})