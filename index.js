const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname + '/front/dist')))

app.get('*', (req, res) => {
    //res.send('Coucou la démo')
    res.sendFile(path.join(__dirname + '/front/dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    console.log('connected :)')
}).on('error', err => console.log('erreur de connexion : ', err))