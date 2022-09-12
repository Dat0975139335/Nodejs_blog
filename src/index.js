const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const res = require("express/lib/response");
const app = express();
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
app.set("views", path.join(__dirname, "/resources/views"));
//router
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
