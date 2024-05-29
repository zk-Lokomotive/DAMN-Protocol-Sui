const authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    req.user = { id: 1, name: 'Test User' }; // Example -batur
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = { authenticate };
