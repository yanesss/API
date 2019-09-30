const Joi = require("joi");
const app = require("./app.js");
const port = process.env.PORT || 3000;

/**
 * REFACTORING
 */

// //need to pull from database
// const subscriptionsList = [
//   { id: 1, name: "Netflix" },
//   { id: 2, name: "Twitch" },
//   { id: 3, name: "Hulu" }
// ];

// //empty get request
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// //grabs all subscriptionsList
// app.get("/api/subscriptionsList", (req, res) => {
//   res.send(subscriptionsList); //need to call from database.
// });

// //post new subscription
// app.post("/api/subscriptionsList", (req, res) => {
//   const { error } = validateSub(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   const sub = {
//     id: subscriptionsList.length + 1,
//     name: req.body.name
//   };
//   subscriptionsList.push(sub);
//   res.send(sub);
// });

// //grabs a specific subscription
// app.get("/api/subscriptionsList/:name", (req, res) => {
//   //need to check for lowercase
//   const subscription = subscriptionsList.find(s => s.name == req.params.name);
//   if (!subscription) {
//     return res.status(404).send("The subscription was not found");
//   }
//   res.send(subscription);
// });

// app.put("/api/subscriptionsList/:name", (req, res) => {
//   //search for sub
//   const subscription = subscriptionsList.find(s => s.name == req.params.name);
//   if (!subscription) {
//     return res.status(404).send("The subscription was not found");
//   }

//   //validate sub
//   const { error } = validateSub(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   //update subs
//   subscription.name = req.body.name;

//   //return updated sub
//   res.send(subscription);
// });

// app.delete("/api/subscriptionsList/:name", (req, res) => {
//   //look up subscription
//   const subscription = subscriptionsList.find(s => s.name == req.params.name);
//   if (!subscription) {
//     return res.send(404).message("Subscription not found.");
//   }

//   //delete
//   const index = subscriptionsList.indexOf(subscription);
//   subscriptionsList.splice(index, 1);

//   res.send(subscription);
// });

// function validateSub(subscriptionsList) {
//   const schema = {
//     name: Joi.string()
//       .min(3)
//       .required()
//   };
//   return Joi.validate(subscriptionsList, schema);
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
