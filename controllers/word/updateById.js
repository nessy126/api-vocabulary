const { createError } = require("../../helpers/errors");
const { Word } = require("../../models/word");

const updateById = async (req, res, next) => {
  const { wordId } = req.params;

  const updatedWord = await Word.findByIdAndUpdate(wordId, req.body, { new: true });
  if (!updatedWord) {
    throw createError(404);
  }

  res.json(updatedWord);
};

module.exports = updateById;
