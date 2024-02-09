//import Dotenv
import {} from "dotenv/config";
//import express
import express from "express";
import initApp from "./src/modules/app.router.js";

//create the app function
const app = express();
// create a PORT variable and get the value from .env file or the default is 3000
const PORT = process.env.PORT || 3000;

initApp(app, express);

app.get("/", (req, res) => {
  return res.json("OK");
});

// application listening details
app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
