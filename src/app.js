const express = require("express");
const routes = require("./routes/index.js");
const cors = require("cors");

const server = express();

server.name = "API";


const origins = ["http://localhost:5173","*","https://tecnicaaramis.netlify.app"];
server.use(cors({
	origin:origins[2],
	credentials: true 
}));

 
server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

module.exports = server;
