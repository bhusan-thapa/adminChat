module.exports = (req, res, next) => {
  if (!req.user) {
    console.log('not logged');
    return res.status(401).send({ error: 'Secured Route: Must Login' });
  }
  next();
};
