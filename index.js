import express from "express";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import course from "./routes/index.js";
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`server is running on port----> http://localhost:${port}`);
});
//import mongoose--------------------------------------------
import { connect } from "mongoose";
//db connection----------------------------------------------
connect(
  "mongodb+srv://jemish0581:Shivay99@cluster0.5ijjgyt.mongodb.net/courses?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    logger: console.log,
    loggerLevel: "debug",
  }
).then(() => {
  console.warn("Database connected successfully...");
});
