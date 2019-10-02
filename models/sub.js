/**
 * Define how a subscription should look
 * Schema
 */

const mongoose = require("mongoose");

const subSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
});

// 1st arg is the name of model
// 2nd arg is schema
module.exports = mongoose.model("Subscription", subSchema);
