var router = require('express').Router();
const boardController = require('../controllers/boardController');

router.get('/list', boardController.findAllBoard);
router.get('/list/:board_uid', boardController.findOneBoard);
router.get('/insert', boardController.insertBoardPage);
router.post('/insert', boardController.insertBoard);
router.post('/list/update', boardController.updateBoard);
router.delete('/list/delete', boardController.board_delete);


module.exports = router;