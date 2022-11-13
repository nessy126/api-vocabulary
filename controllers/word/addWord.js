const { Word } = require("../../models/word");

const addWord = async (req, res, next) => {
  const { deutsch, english, russian, typeOfWord } = req.body;

  const word = await Word.create({deutsch, english, russian, typeOfWord})


  res.status(201).json(word);
};

module.exports = addWord;
