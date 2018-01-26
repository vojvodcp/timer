var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    login = require('../controllers/login'),
    image = require('../controllers/image');
    timer = require('../controllers/timer');
module.exports = function(app) {
    router.get('/', home.index);
    router.get('/login', login.index);
    router.get('/images/:image_id', image.index);
    router.get('/timer', timer.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);
    router.post('/login/login', login.login);
    app.use(router);
};
