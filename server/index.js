const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getZoltar } = require('./controller')
const { addGarmet } = require('./controller')
const { lookup } = require('./controller')
const { getInv } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/zoltar", getZoltar);
app.post("/api/adder", addGarmet);
app.get("/api/inventory", getInv)
app.get(`/api/lookup`, lookup);

app.listen(4000, () => console.log("Server running on 4000"));
