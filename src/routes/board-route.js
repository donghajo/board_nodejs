var router = require('express').Router()
const boardController = require('../controllers/board-controller');
const pool = require('../database/pool');

router.get('/list', boardController.board_read);
router.get('/list/:board_uid', boardController.board_read_content);
router.get('/insert', boardController.board_read_insert);
router.post('/insert', boardController.board_insert);
router.patch('/list/update/:board_uid', boardController.board_update);
router.post('/list/:board_uid', boardController.board_delete);


module.exports = router