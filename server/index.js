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





// // import cookieParser from "cookie-parser";
// // import cors from "cors";
// // import "dotenv/config";
// // import express from "express";
// // import http from "http";
// // import mongoose from "mongoose";
// // import routes from "./src/routes/index.js";

// // const app = express();

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());

// // app.use("/api/v1", routes);

// // const port = process.env.PORT || 5000;

// // const server = http.createServer(app);

// // mongoose.connect(process.env.MONGODB_URL).then(() => {
// //     console.log("Mongodb connected");
// //     server.listen(port, () => {
// //       console.log(`Server is listening on port ${port}`);
// //     });
// //   }).catch((err) => {
// //     console.log({ err });
// //     process.exit(1);
// //   });


// // import cookieParser from "cookie-parser";
// // import cors from "cors";
// // import "dotenv/config";
// // import express from "express";
// // import http from "http";
// // import mongoose from "mongoose";
// // import routes from "./src/routes/index.js";

// // const app = express();

// // // CORS Configuration - Ensuring Flexibility and Proper Preflight Request Handling
// // app.use(
// //     cors({
// //         origin: [
// //             'https://movie-review-website-8ljk.vercel.app',
// //             'http://localhost:3000' // Optional for local testing
// //         ],
// //         methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //         allowedHeaders: ['Content-Type', 'Authorization'],
// //         credentials: true
// //     })
// // );

// // // Handle Preflight Requests (Important for DELETE, PUT requests)
// // app.options('*', cors());

// // // Middleware
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());

// // // API Routes
// // app.use("/api/v1", routes);

// // // Error Handling Middleware (Optional but recommended)
// // // app.use((err, req, res, next) => {
// // //     console.error(err.stack);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // // });
// // app.use((req, res, next) => {
// //   res.header("Access-Control-Allow-Origin", "https://movie-review-website-8ljk.vercel.app");
// //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// //   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
// //   res.header("Access-Control-Allow-Credentials", "true");

// //   if (req.method === "OPTIONS") {
// //       return res.sendStatus(200);  // Important for preflight requests
// //   }

// //   next();
// // });


// // // Server Setup
// // const port = process.env.PORT || 5000;
// // const server = http.createServer(app);

// // // MongoDB Connection
// // mongoose
// //     .connect(process.env.MONGODB_URL)
// //     .then(() => {
// //         console.log("✅ MongoDB connected successfully");
// //         server.listen(port, () => {
// //             console.log(`🚀 Server is running on port ${port}`);
// //         });
// //     })
// //     .catch((err) => {
// //         console.error("❌ MongoDB Connection Error:", err.message);
// //         process.exit(1);
// //     });



// import cookieParser from "cookie-parser";
// import cors from "cors";
// import "dotenv/config";
// import express from "express";
// import http from "http";
// import mongoose from "mongoose";
// import routes from "./src/routes/index.js";

// const app = express();

// // CORS Configuration
// app.use(
//     cors({
//         origin: ['https://movie-review-website-8ljk.vercel.app', 'http://localhost:3000'],
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type', 'Authorization'],
//         credentials: true,
//     })
// );

// // Handle Preflight Requests (Important for DELETE, PUT requests)
// app.options('*', cors());

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // API Routes
// app.use("/api/v1", routes);

// // Server Setup
// const port = process.env.PORT || 5000;
// const server = http.createServer(app);

// // MongoDB Connection
// mongoose
//     .connect(process.env.MONGODB_URL)
//     .then(() => {
//         console.log("✅ MongoDB connected successfully");
//         server.listen(port, () => {
//             console.log(`🚀 Server is running on port ${port}`);
//         });
//     })
//     .catch((err) => {
//         console.error("❌ MongoDB Connection Error:", err.message);
//         process.exit(1);
//     });