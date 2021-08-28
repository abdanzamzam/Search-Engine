// if (process.env.NODE_ENV === "development") {
//   require("dotenv").config();
// }

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routers = require("./routers");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routers);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
