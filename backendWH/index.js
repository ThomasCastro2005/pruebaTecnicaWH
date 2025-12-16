const express = require("express");
const cors = require("cors");
require("dotenv").config();

const charactersRoutes = require("./routes/characters.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/characters", charactersRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
