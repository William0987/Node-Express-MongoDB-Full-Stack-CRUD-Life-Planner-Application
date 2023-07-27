const express = require('express');
const router = express.Router();
const yearsCtrl = require('../controllers/years');

router.get('/', yearsCtrl.index);
router.get('/new', yearsCtrl.new);
router.get('/:id', yearsCtrl.show);
router.get('/:id/edit', yearsCtrl.edit);
router.post('/', yearsCtrl.create);
router.delete('/:id', yearsCtrl.delete);
router.put('/:id', yearsCtrl.update);


module.exports = router;