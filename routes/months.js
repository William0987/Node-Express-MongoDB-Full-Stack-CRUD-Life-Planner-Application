const express = require('express');
const router = express.Router();
const monthsCtrl = require('../controllers/months');

router.get('/', monthsCtrl.index);
router.get('/new', monthsCtrl.new);
router.get('/:month', monthsCtrl.show);
router.get('/:month/edit', monthsCtrl.edit)
router.post('/', monthsCtrl.create);
router.delete('/:month', monthsCtrl.delete);
router.put('/:month', monthsCtrl.update);


module.exports = router;