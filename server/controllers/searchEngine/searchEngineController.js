const axios = require("axios");

class SearchEngineController {
  static async searchByQuery(req, res, next) {
    const params = {
      api_key: process.env.API_KEY,
      q: req.query.keyword,
    };
    try {
      const response = await axios.get("https://api.scaleserp.com/search", {
        params,
      });
      res.status(200).json({
        search_information: response.data.search_information,
        pagination: response.data.pagination.api_pagination,
        organic_results: response.data.organic_results,
      });
    } catch (error) {
      // console.log(error);
      res.status(501).json({
        msg: "Internal server error",
      });
    }
  }
}

module.exports = SearchEngineController;
