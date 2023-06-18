const express = require("express");
const connectDB = require("./configs/db");
const dotenv = require("dotenv");
const visitorRoutes = require("./routes/visitor.routes");
const cors = require("cors");
dotenv.config();

connectDB();
const app = express();

const allowedOrigins = [
  // "http://192.168.29.152:3000",
  // "http://localhost:3000",
  // "http://127.0.0.1:3000",
];
// app.use(
//   cors({
//     origin: allowedOrigins,
//   })
// );


// "https://advance-portfolio-blush.vercel.app/",
//   "https://kundusaikat.github.io",

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Portfolio API is Running"));
app.use("/visitors", visitorRoutes);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log("server started on http://localhost:8080/");
});
