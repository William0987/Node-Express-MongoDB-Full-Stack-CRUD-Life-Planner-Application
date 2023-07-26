const express = require('express');
const router = express.Router();
const yearsCtrl = require('../controllers/years');

router.get('/', yearsCtrl.index);
router.get('/new', yearsCtrl.new);
router.get('/:id', yearsCtrl.show);
router.post('/', yearsCtrl.create);

module.exports = router;