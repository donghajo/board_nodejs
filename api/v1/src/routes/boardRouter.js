var router = require('express').Router();
const boardController = require('../controllers/boardController');

router.get('/', boardController.findAllBoard);
router.get('/board/:board_uid', boardController.findOneBoard);
router.get('/insert', boardController.insertBoardPage);
router.post('/insert', boardController.insertBoard);
router.post('/update', boardController.updateBoard);
router.delete('/delete', boardController.deleteBoard);


module.exports = router;