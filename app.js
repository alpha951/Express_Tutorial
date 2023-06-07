const express = require('express')
const app = express()

const peopleRouter = require('./routes/people')
const loginRouter = require('./routes/auth')


// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', peopleRouter)

app.use('/login', loginRouter)

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})