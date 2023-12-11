const express = require("express"); 
const db  = require("./db");
require('dotenv').config()
const cors = require("cors"); 
const app = express();
app.set('trust proxy', true);
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

require("./routes/index")(app);

app.get("/", (req, res) => {
  res.end("Routing App!");
});

app.use((req, res) => {
  res.status(404).send({ msg: "Page not found", status: 404 });
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
  db();
});