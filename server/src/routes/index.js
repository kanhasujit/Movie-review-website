import express from "express";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";
import userRoute from "./user.route.js";

const router = express.Router();

// Routes
router.use("/user", userRoute);
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/:mediaType", mediaRoute);

// 404 Handler
router.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default router;