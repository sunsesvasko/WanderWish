const app = require("./app");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

const DATABASE = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DATABASE).then(() => console.log("DB Connection Successful!"));

const server = app.listen(PORT, () =>
  console.log(`App running on Port: ${PORT}`)
);
