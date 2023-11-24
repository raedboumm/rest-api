const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path"); // Import the 'path' module
const envPath = path.join(__dirname, "config", ".env");

dotenv.config({ path: envPath });
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => console.log("db connected"));

app.use(require("express").json());
app.use("/api", require("./routes/ApiRoutes"));

app.listen(port, () => console.log("listening on port:", port));
