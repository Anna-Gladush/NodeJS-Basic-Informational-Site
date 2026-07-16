const { Router } = require('express');
const dbController = require("../controllers/dbController");

const dbRouter = Router();
dbRouter.get("/", dbController.getUsernames);
dbRouter.get("/new", dbController.createUsernameGet);
dbRouter.post("/new", dbController.createUsernamePost);

module.exports = dbRouter;
