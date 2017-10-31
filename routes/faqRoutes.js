const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Question = mongoose.model('faq');

module.exports = app => {
  app.get('/api/faq', requireLogin, async (req, res) => {
    const faq = await Question.find({ _user: req.user.id });
    res.send(faq);
  });
  app.post('/api/faq', requireLogin, (req, res) => {
    //const { faq } = req.body;
    const { question, answer, intent, entity } = req.body;
    const questions = new Question({
      question,
      answer,
      intent,
      entity,
      _user: req.user.id,
      date: Date.now()
    }).save();
  });
};
