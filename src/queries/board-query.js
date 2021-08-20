const board_insert = 'insert into db_board (title, writer, content) value (?, ?, ?)';
const board_read = 'select * from topic where board_uid = ?';
const board_update = 'update db_board set title = ?, content = ?, writer = ? where id = ?';
const board_delete = 'delete from topic where id = ?';
