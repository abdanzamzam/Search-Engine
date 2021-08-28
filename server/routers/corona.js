const express = require("express");
const KawalCorona = require("../controllers/kawalCorona/kawalCorona");
const corona = express.Router();

corona.get("/indonesia", KawalCorona.fetchIndonesia);
corona.get("/provinsi", KawalCorona.fetchProvinsi);

module.exports = corona;
