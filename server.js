const express = require('express');
const path = require('path')

// Create server
const app = express()

const dist = 'dist'

app.use(express.static(dist))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
        if (err) {
            res.status(404).send(err)
        }
    })
})

const port = process.env.PORT || 5056
app.listen(port, () => console.log(`Listening on ${port}`))