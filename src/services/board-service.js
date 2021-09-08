const boardQuery = require('../queries/board-query');
const pool = require('../database/pool');


exports.board_insert = async (req) => {
    try {
        pool.query(boardQuery.board_insert, req);
        return;
        
    } catch (err) {
        throw Error(err);
    }
}
exports.board_update = async (req) => {
    try {
        console.log(req);
        let a = await pool.query(boardQuery.board_update, req);
        return a[0];
    } catch (err){
        throw Errow(err);s
    }
}

exports.board_read = async () => {
    try {
        let rows = await pool.query(boardQuery.board_read);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.board_content = async (req) => {
    try {
        let rows = await pool.query(boardQuery.board_content, req);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.board_delete = async (req) => {
    try{
        pool.query(boardQuery.board_delete, req);
        return;
    }catch(err){
        throw Error(err);
    }
    
}
