const axios = require("axios");

class KawalCorona {
  static async fetchIndonesia(req, res, next) {
    try {
      const response = await axios.get("https://api.kawalcorona.com/indonesia");
      res.status(200).json(response.data);
    } catch (error) {
      res.status(501).json({
        msg: "Internal server error 2",
      });
    }
  }

  static async fetchProvinsi(req, res, next) {
    try {
      const response = await axios.get(
        "https://api.kawalcorona.com/indonesia/provinsi"
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(501).json({
        msg: "Internal server error 2",
      });
    }
  }
}

module.exports = KawalCorona;
