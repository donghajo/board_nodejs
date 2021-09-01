const boardQuery = require('../queries/board-query');
const pool = require('../database/pool');


exports.board_insert = async (req, res) => {
    try {
        pool.query(boardQuery.board_insert, req);
        return;
        
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

exports.board_read_content = async (req, res) => {
    try {
        
        let rows = await pool.query(boardQuery.board_read_content, [req.board_uid]);
        console.log("hello_ser");
        return rows;
    } catch (err) {
        throw Error(err);
    }
}


exports.board_update = async (board_id) => {

}


exports.board_delete = async (req, res) => {
    try{
        pool.query(boardQuery.board_delete, req);
        return;
    }catch(err){
        throw Error(err);
    }
    
}
