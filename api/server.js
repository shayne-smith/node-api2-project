const express = require('express')
const core = require('cors')
const server = express()

// import posts router into server.js
const postsRouter = require('./adopters/posts-router')

server.use(corse()) // takes care of CORS errors hopefully
server.use(express.json()) // if req has json in body, it can be parsed and put inside req.body

server.use('/api/posts', postsRouter)

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
    res.send(`
        <h2>Lambda Blog Posts API</h2>
        <p>Welcome to the Lambda Blog Posts API</p>
    `)
})

module.exports = server