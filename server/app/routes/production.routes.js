module.exports = app => {
  const productions = require("../controllers/production.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", productions.create);

  // Retrieve all Tutorials
  router.get("/", productions.findAll);

  // Retrieve all published Tutorials
  router.get("/published", productions.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", productions.findOne);

  // Update a Tutorial with id
  router.put("/:id", productions.update);

  // Delete a Tutorial with id
  router.delete("/:id", productions.delete);

  // Delete all Tutorials
  //router.delete("/", productions.deleteAll);

  app.use('/api/productions', router);
};
