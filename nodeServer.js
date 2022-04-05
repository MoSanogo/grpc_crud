const http = require("http");

const express=require("express");
const host = "localhost";
const port = 8000;
const bodyParser = require("body-parser");
const routes=require("./routes");

const app=express();
app.use([bodyParser.json(),bodyParser.urlencoded({extended:true})])
routes(app);
console.log(app.configure)
const server = http.createServer(app);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});