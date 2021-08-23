var router = require('express').Router()
const boardController = require('../controllers/board-controller');

router.get('/', boardController.board_read);
router.post('/', boardController.board_insert);
router.patch('/', boardController.board_update);
router.delete('/', boardController.board_delete);



module.exports = router