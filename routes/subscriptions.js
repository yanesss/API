const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Sub = require("../models/sub");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /subscriptions"
  });
});

router.post("/", (req, res, next) => {
  //create new sub
  const subscription = {
    name: req.body.name
  };

  //instance of model
  const sub = new Sub({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });

  //save to db.
  sub
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  res.status(200).json({
    message: "Handling POST requests to /subscriptions",
    createdSubscription: sub
  });
});

router.get("/:subscriptionId", (req, res, next) => {
  const id = req.params.subscriptionId;
  Sub.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      //must send res status in promise because of async
      //if called before is will run before promise finishes
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:subscriptionId", (req, res, next) => {
  res.status(200).json({
    message: "updated subscription"
  });
});

router.delete("/:subscriptionId", (req, res, next) => {
  res.status(200).json({
    message: "deleted subscription"
  });
});

module.exports = router;
