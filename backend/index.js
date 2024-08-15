const express = require("express");
const app = express(); //able to parse json objects
const cors = require("cors");
app.use(cors());
//structuring APIs
// /api/v1/user/signup
// /api/v1/user/sigin
app.use(express.json());
const rootRouter = require("./routes/index");

app.use("/api/v1", rootRouter);

app.listen(3000);
//order matters
//middlewares above the actual route
