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


exports.board_read = async () => {
    try {
        let rows = await pool.query(boardQuery.board_read);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.board_read_content = async (req, res) => {
    try {
        let id = req.params.board_uid;
        let rows = await pool.query(boardQuery.board_read_content, [id]);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}


exports.board_update = async (req, res) => {
    var data = [req.body.board_uid, req.body.board_title, req.body.board_writer, req.body.board_content];
    try {
        let rows = await pool.query(boardQuery.board_update, data);
        return rows[0];
    } catch (err){
        throw Errow(err);
    }

}


exports.board_delete = async (req, res) => {
    try{
        var id = req.params.board_uid;
        console.log([id]);
        pool.query(boardQuery.board_delete, [id]);
        return;
    }catch(err){
        throw Error(err);
    }
    
}
