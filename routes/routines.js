const express = require('express');
const router = express.Router();
const routinesCtrl = require('../controllers/routines');

router.get('/', routinesCtrl.index);
router.get('/new', routinesCtrl.new);
router.get('/:day', routinesCtrl.show);
router.get('/:day/edit', routinesCtrl.edit)
router.post('/', routinesCtrl.create);
router.delete('/:day', routinesCtrl.delete);
router.put('/:day', routinesCtrl.update);


module.exports = router;