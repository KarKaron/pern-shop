require("dotenv").config();

const express = require("express"),
      PORT = process.env.PORT || 5000,
      app = express();

app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`));