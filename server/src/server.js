require("dotenv").config();  
const express = require("express");            // Web server framework
const mongoose = require("mongoose");          // MongoDB object modeling
const cors = require("cors");                  // Cross-Origin Resource Sharing
                  // Loads variables from .env

const app = express();
app.use(express.json());                       // Parse incoming JSON
app.use(cors());                               // Allow frontend to communicate with backend


mongoose.connect(process.env.MONGO_URI)        // Connect to MongoDB
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/auth"));  // Use auth route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
