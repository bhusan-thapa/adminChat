const mongoose = require('mongoose');
const { Schema } = mongoose;

const faqSchema = new Schema({
  question: String,
  answer: String,
  entity: String,
  intent: String
});

module.exports = faqSchema;
