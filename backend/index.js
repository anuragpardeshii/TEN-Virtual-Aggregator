const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToDb } = require("./config/db.js");
const submissionRoutes = require("./routes/submission.js");
const journalRoute = require("./routes/journalRoute.js");
const contactRoute = require("./routes/contactRoute.js");
const eventRoute = require("./routes/addEventRoute.js");
const sciEventsRoute = require("./routes/sciEventsRoute.js");
const adminRoute = require("./routes/adminRoute.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Define your CORS options (allow specific domains or all)
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*", // Set "*" to allow all, or define a specific domain
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow credentials like cookies or authentication headers
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use("/uploads", express.static("uploads"));

// Connect to the database
connectToDb(process.env.MONGO_URI);

// Routes for various API endpoints
app.use("/submit", submissionRoutes);
app.use("/api", contactRoute);
app.use("/api", journalRoute);
app.use("/api", eventRoute);
app.use("/api", sciEventsRoute);
app.use("/api/admin", adminRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Virtual Conference");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
