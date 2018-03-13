const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.send('Coucou la démo')
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    console.log('connected :)')
}).on('error', err => console.log('erreur de connexion : ', err))