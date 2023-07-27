const express = require('express');
const router = express.Router();
const monthsCtrl = require('../controllers/months');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', monthsCtrl.index);
router.get('/new', ensureLoggedIn, monthsCtrl.new);
router.get('/:month', ensureLoggedIn, monthsCtrl.show);
router.get('/:month/edit', ensureLoggedIn, monthsCtrl.edit)
router.post('/', ensureLoggedIn, monthsCtrl.create);
router.delete('/:month', ensureLoggedIn, monthsCtrl.delete);
router.put('/:month', ensureLoggedIn, monthsCtrl.update);


module.exports = router;