const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const song = require("./routes/song");
const artist = require("./routes/artist");
const user = require("./routes/user");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHander");
const res = require("express/lib/response");

dotenv.config({ path: "./config/config.env" });

const app = express();

// parse application/json
app.use(bodyParser.json());

app.use(errorHandler);
app.use(logger);
app.use("/song", song);
app.use("/artist", artist);
app.use("/user", user);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
