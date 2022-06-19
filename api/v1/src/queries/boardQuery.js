exports.insertBoard = 'insert into board (board_title, board_writer, board_content) values(?, ?, ?)';
exports.findAllBoard = 'select * from board';
exports.findOneBoard = 'select * from board where board_uid = ?';
exports.updateBoard = 'update board set board_title = ?, board_content = ?, board_writer = ? where board_uid = ?';
exports.deleteBoard = 'delete from board where board_uid = ?';
