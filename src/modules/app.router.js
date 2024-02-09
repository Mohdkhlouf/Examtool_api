import connectDB from "../../db/connection.js";
// import routers
import answerRouter from "./answers/answer.router.js";

const initApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.get("/", (req, res) => {
    return res.status(200).json({ Message: "you are welcome!" });
  });
  app.use("/answers", answerRouter);

  app.get("*", (req, res) => {
    return res.status(500).json({ Message: "Page not found!" });
  });
};

export default initApp;
