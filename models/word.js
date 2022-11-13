const { Schema, model } = require("mongoose");
const Joi = require("joi");

const wordSchema = Schema(
  {
    deutsch: {
      type: String,
      require: true,
    },
    english: {
      type: String,
      require: false,
    },
    russian: {
      type: String,
      require: false,
    },
    typeOfWord: {
      type: String,
      enum: ["Nomen", "Verb", "Adjektive", "Phrase"],
    },
  },
  { versionKey: false, timestamps: true }
);

const JoiWordSchema = Joi.object({
  deutsch: Joi.string().required(),
  english: Joi.string(),
  russian: Joi.string(),
  typeOfWord: Joi.string().valid("Nomen", "Verb", "Adjektive", "Phrase"),
});

const Word = model("word", wordSchema);

module.exports = {
  Word,
  joiSchema: {
    word: JoiWordSchema,
  },
};
