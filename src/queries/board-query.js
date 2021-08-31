exports.board_insert = 'insert into db_board (board_title, board_writer, board_content) value (?, ?, ?)';
exports.board_read = 'select * from db_board';
exports.board_update = 'update db_board set board_title = ?, board_content = ?, board_writer = ? where board_uid = ?';
exports.board_delete = 'delete from db_board where board_uid = ?';
