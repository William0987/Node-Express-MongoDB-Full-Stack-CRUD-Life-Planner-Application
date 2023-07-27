const express = require('express');
const router = express.Router();
const yearsCtrl = require('../controllers/years');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', yearsCtrl.index);
router.get('/new', ensureLoggedIn, yearsCtrl.new);
router.get('/:id', ensureLoggedIn, yearsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, yearsCtrl.edit);
router.post('/', ensureLoggedIn, yearsCtrl.create);
router.delete('/:id', ensureLoggedIn, yearsCtrl.delete);
router.put('/:id', ensureLoggedIn, yearsCtrl.update);


module.exports = router;