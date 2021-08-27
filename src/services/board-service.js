const boardQuery = require('../queries/board-query');
const pool = require('../database/pool');


exports.board_insert = async (req) => {

}


exports.board_read = async (board_uid) => {
    try {
        let rows = await pool.query(boardQuery.board_read, [board_uid]);
        console.log("pass_service");
        console.log(rows[0]);
        return rows[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}


exports.board_update = async (board_id) => {

}


exports.board_delete = async (board_id) => {
    
}
