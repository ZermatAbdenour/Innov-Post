require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const DBConnect = require("./DB/connect");
const authRouter = require("./routers/auth");
const errorHandeler = require("./middlewares/error-handeler");
const productRouter = require("./routers/product");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
//error handeler middleware
app.use(errorHandeler);

const Port = process.env.PORT || 3000;
const Start = async () => {
  try {
    await DBConnect(process.env.MONGODB_URI);
    app.listen(Port, () =>
      console.log(`Server is listening on port : ${Port}`)
    );
  } catch (err) {
    console.log(err);
  }
};

Start();
