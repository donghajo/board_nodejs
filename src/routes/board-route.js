var router = require('express').Router()
const boardController = require('../controllers/board-controller');
const pool = require('../database/pool');

router.get('/', boardController.board_read);
router.get('/', boardController.board_read_insert);
router.post('/', boardController.board_insert);
router.patch('/update/:board_uid', boardController.board_update);
router.delete('/', boardController.board_delete);


module.exports = router