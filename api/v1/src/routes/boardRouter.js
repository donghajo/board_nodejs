var router = require('express').Router();
const boardController = require('../controllers/boardController');

router.get('/', boardController.findAllBoard);
router.get('/board/:board_uid', boardController.findOneBoard);
router.get('/board', boardController.insertBoardPage);
router.post('/board', boardController.insertBoard);
router.get('/:board_uid', boardController.updateBoardPage);
router.put('/:board_uid', boardController.updateBoard);
router.delete('/board/:board_uid', boardController.deleteBoard);


module.exports = router;