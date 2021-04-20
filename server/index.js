require("dotenv").config();

const express = require("express"),
      cors = require("cors"),
      sequelize = require("./db"),
      models = require("./models/models");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ "message": "WORKING!!!"});
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
