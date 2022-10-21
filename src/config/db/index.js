const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/shop_education_dev`", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {}
}
module.exports = { connect };
