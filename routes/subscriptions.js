const express = require("express");
const router = express.Router();

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

  res.status(200).json({
    message: "Handling POST requests to /subscriptions",
    createdSubscription: subscription
  });
});

router.get("/:subscriptionId", (req, res, next) => {
  const id = req.params.subscriptionId;
  if (id === "special") {
    res.status(200).json({
      message: "you have reached special id",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an id"
    });
  }
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
