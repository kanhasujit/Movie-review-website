import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";
// import { routes } from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});







// PRIVATE CLIENT
// const baseURL = "https://movie-review-website-pied.vercel.app/api/v1/";
// const baseURL = "http://127.0.0.1:5000/api/v1/";

// public client
// const baseURL = "http://127.0.0.1:5000/api/v1/";
// const baseURL = "https://movie-review-website-pied.vercel.app/api/v1/";
// const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1/";