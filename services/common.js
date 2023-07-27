const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }

  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzI0M2Y2ZjQ0NDU1MjkzYWFmODU4NCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkwNDUzMDIwfQ.FGyodvAC2aCVoFO7Jx_qJsxwMysId0ozAhDNK7shGu0"
  return token;
};