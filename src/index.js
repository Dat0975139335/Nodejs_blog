const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const res = require("express/lib/response");
const app = express();
const db = require("./config/db");
// Connect to DB
db.connect();
const port = 5000;
const routes = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// XMLHttpRequest. fetch,axios

//HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
//router
routes(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
