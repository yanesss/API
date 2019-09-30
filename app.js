const express = require("express");
const app = express();
const morgan = require("morgan"); //funnel all requests
const bodyParser = require("body-parser");

const subscriptionRoutes = require("./routes/subscriptions"); //provides the route to subscriptions

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); //false for simple bodies --use true if rich bodies needed
app.use(bodyParser.json());

//prevent CORS Errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // * gives access to any client
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

//route that handles request
app.use("/subscriptions", subscriptionRoutes);

//catch all requests
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error); //forwards error
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
