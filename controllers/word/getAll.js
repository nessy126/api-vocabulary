const { Word } = require("../../models/word");

const getAll = async (req, res) => {
  const words = await Word.find();

  res.json(words);
};

module.exports = getAll;
