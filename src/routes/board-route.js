var router = require('express').Router()
const boardController = require('../controllers/board-controller');


router.get('/read/:board_uid', boardController.board_read);
router.get('/insert', boardController.board_read_insert);
router.post('/', boardController.board_insert);
router.patch('/update/:board_uid', boardController.board_update);
router.delete('/', boardController.board_delete);



module.exports = router