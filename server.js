import express from "express";
import basicAuth from "basic-auth";

const app = express();

function setUnauthorizedResponse(response) {
  response.set("WWW-Authenticate", "Basic realm=Authorization Required");
  response.sendStatus(401);
}

app.use((request, response, next) => {
  let user = basicAuth(request);

  if(!user || !user.name || !user.pass) {
    return setUnauthorizedResponse(response);
  }

  if(user.name === process.env.AUTH_USER && user.pass === process.env.AUTH_PASS) {
    next();
  }
  else {
    return setUnauthorizedResponse(response);
  }
});

app.use("/assets", express.static("build"));

app.use("/", express.static("public"));

let port = process.env.PORT || 1337;

app.listen(port);

console.log("Running on port:", port);
