import answerModle from "../../../db/model/answer.model.js";

export const getAnswers = async (req, res) => {
  const answers = await answerModle.find();
  return res.status(200).json({ Message: "success", answers });
};

export const addAnswers = async (req, res) => {
  const answerFreeText = req.body.answerFreeText;
  const answerRadio = req.body.answerRadio;

  console.log(answerFreeText);
  console.log(answerRadio);

  const answer = await answerModle.create({
    answerFreeText,
    answerRadio,
  });

  return res.status(200).json({ Message: "Added to DB succesfully", answer });
};
