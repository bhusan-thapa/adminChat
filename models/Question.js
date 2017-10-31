const mongoose = require('mongoose');
const { Schema } = mongoose;
// const faqSchema = require('./Faq');

const questionSchema = new Schema({
  question: String,
  answer: String,
  intent: String,
  entity: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: Date
});

mongoose.model('faq', questionSchema);
