const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToDb } = require("./config/db.js");  // Adjusted for CommonJS
const submissionRoutes = require("./routes/submission.js");
const journalRoute = require("./routes/journalRoute.js");
const contactRoute = require("./routes/contactRoute.js");
const eventRoute = require("./routes/addEventRoute.js");
const sciEventsRoute = require("./routes/sciEventsRoute.js");
const adminRoute = require("./routes/adminRoute.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

connectToDb(process.env.MONGO_URI);

app.use("/submit", submissionRoutes);
app.use("/api", contactRoute);
app.use("/api", journalRoute);
app.use("/api", eventRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Virtual Conference");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api", sciEventsRoute);
app.use("/api/admin", adminRoute);
