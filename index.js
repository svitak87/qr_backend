require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const route = require('./routes/routeQR')
const advantages = require('./routes/routeAdvantages')

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json())

server.use(route, advantages)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})