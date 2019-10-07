const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Sub = require("../models/sub");

router.get("/", (req, res, next) => {
  Sub.find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: "no data found"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  //instance of model
  const subscription = new Sub({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });

  //save to db.
  subscription
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /subscriptions",
        createdSubscription: result
      });
    })
    .catch(err => {
      console.log(err => console.log(err));
      res.status(500).json({
        error: err
      });
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
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "Invalid ID provided"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:subscriptionId", (req, res, next) => {
  const id = req.params.subscriptionId;
  Sub.update({ _id: id }, { $set: { name: req.body.newName } })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:subscriptionId", (req, res, next) => {
  const id = req.params.subscriptionId;
  Sub.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
