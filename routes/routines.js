const express = require('express');
const router = express.Router();
const routinesCtrl = require('../controllers/routines');

router.get('/', routinesCtrl.index);
router.get('/new', routinesCtrl.new);
router.get('/:day', routinesCtrl.show);
router.post('/', routinesCtrl.create);


module.exports = router;