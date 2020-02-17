var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');

var getOne = (req, res, next) => {
  let params = { [req.body.params.key]: req.body.params.value }
  User.findOne(req.payload.id).then(function (user) {
    if (!user) { return res.sendStatus(401); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
}
var getList = (req, res, next) => {
  let searchParams = {};
  let options = {
    limit: req.body.limit,
    page: req.body.page,
    sort: req.body.sort
  }
  User.find().then(function (user) {
    if (!user) { return res.sendStatus(401); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
}
var createUser = (req, res, next) => {
  var userData = req.body.user;
  var user = new User(userData);
  console.clear();
  console.log(user);
  user.setPassword(userData.password);
  // res.json({ user: '111'});return;
  user.save().then(() => {
    return  res.json({ user: '111'})
    //return res.json({ user: user.toAuthJSON() });
  },() => {
    return  res.json({ user:user})
  }).catch(next)

}
var updateUser = (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if (!user) { return res.sendStatus(401); }

    //only update fields that were actually passed...
    var userData = req.body.user;
    if (userData.email) { user.email = userData.email };
    if (userData.firstName) { user.firstName = userData.firstName }
    if (userData.lastName) { user.lastName = userData.lastName }
    if (userData.phoneNumber) { user.phoneNumber = userData.phoneNumber }
    if (userData.address) { user.address = userData.address }
    if (userData.description) { user.description = userData.description }
    if (userData.password) { user.setPassword(userData.password) };

    return user.save().then(() => {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
}
var deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.payload.id).then((user) => {
    if (!user) { return res.sendStatus(401); }

    //only update fields that were actually passed...
    var userData = req.body.user;
    if (userData.email) { user.email = userData.email };
    if (userData.firstName) { user.firstName = userData.firstName }
    if (userData.lastName) { user.lastName = userData.lastName }
    if (userData.phoneNumber) { user.phoneNumber = userData.phoneNumber }
    if (userData.address) { user.address = userData.address }
    if (userData.description) { user.description = userData.description }
    if (userData.password) { user.setPassword(userData.password) };

    return user.save().then(() => {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
}
var loginForm = (req, res, next) => {
  var userLogin = res.body.user;
  if (!userLogin) {
    return res.status(422).json({ error: { email: 'Nhập thông tin đăng  nhập' } });
  }
  if (!userLogin.username) {
    return res.status(422).json({ error: { email: "Nhâp tên đăng nhập" } });
  }
  if (!userLogin.password) {
    return res.status(422).json({ error: { password: "Nhâp mật khẩu đăng nhập" } });
  }
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) { return next(err); }
    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

router.get('user', auth.required, getList);
router.get('user/getone', auth.required, getOne);
router.post('user/update', auth.required, updateUser);
router.put('user/delete', auth.required, deleteUser);
router.put('/user/create', createUser);//auth.required,
router.post('user/login', loginForm);
module.exports = router;
