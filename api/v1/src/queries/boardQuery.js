exports.insertBoard = 'insert into db_board (board_title, board_writer, board_content) values(?, ?, ?)';
exports.findAllBoard = 'select * from db_board';
exports.findOneBoard = 'select * from db_board where board_uid = ?';
exports.updateBoard = 'update db_board set board_title = ?, board_content = ?, board_writer = ? where board_uid = ?';
exports.deleteBoard = 'delete from db_board where board_uid = ?';
