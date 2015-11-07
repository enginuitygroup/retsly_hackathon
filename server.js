import express from "express";

const app = express();

app.use("/assets", express.static("build"));

app.use("/", express.static("public"));

let port = process.env.port || 1337;

app.listen(port);

console.log("Running on port:", port);
