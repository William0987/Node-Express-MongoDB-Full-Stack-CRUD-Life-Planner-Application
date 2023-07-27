const express = require('express');
const router = express.Router();
const routinesCtrl = require('../controllers/routines');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', routinesCtrl.index);
router.get('/new', ensureLoggedIn, routinesCtrl.new);
router.get('/:day', ensureLoggedIn, routinesCtrl.show);
router.get('/:day/edit', ensureLoggedIn, routinesCtrl.edit)
router.post('/', ensureLoggedIn, routinesCtrl.create);
router.delete('/:day', ensureLoggedIn, routinesCtrl.delete);
router.put('/:day', ensureLoggedIn, routinesCtrl.update);

module.exports = router;  