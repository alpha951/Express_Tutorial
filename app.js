const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data.js')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.json(data.products)
// })

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send("Post")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
