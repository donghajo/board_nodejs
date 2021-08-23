var router = require('express').Router()
const boardController = require('../controllers/board-controller');

router.get('/:board_uid', boardController.board_read);
router.post('/insert', boardController.board_insert);
router.patch('/update/:board_uid', boardController.board_update);
router.delete('/', boardController.board_delete);



module.exports = router