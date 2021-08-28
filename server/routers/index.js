const SearchEngineController = require("../controllers/searchEngine/searchEngineController");
const express = require("express");
const corona = require("./corona");
const routers = express.Router();

routers.get("/search", SearchEngineController.searchByQuery);
routers.use("/corona", corona);

module.exports = routers;
