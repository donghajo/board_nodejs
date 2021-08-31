const boardQuery = require('../queries/board-query');
const pool = require('../database/pool');


exports.board_insert = async (req) => {
    try {
        let rows = await pool.query(boardQuery.board_insert,  (board_title, board_writer, board_content));
        console.log("hi");
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}


exports.board_read = async (board_uid) => {
    try {
        let rows = await pool.query(boardQuery.board_read);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}


exports.board_update = async (board_id) => {

}


exports.board_delete = async (board_id) => {
    
}
