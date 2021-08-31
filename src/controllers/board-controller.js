const boardService = require('../services/board-service');

exports.board_insert = async (req, res) => {
    let { board_title, board_writer, board_content } = req.body;
    try{
        let rows = await boardService.board_insert( board_title, board_writer, board_content);
        console.log("pass_controller_insert");
        return res.json(rows[0]);
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.board_read = async (req, res, next) => {
    let { board_uid } = req.params;
    try {
       let rows = await boardService.board_read();
       return res.render('index', {rows:rows});
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.board_read_insert = async (req, res) =>{
    return res.render('write');
}


exports.board_update = async (req, res, next) => {
    let { board_uid } = req.body;
    try{
        let rows = await boardService.board_update(board_uid);
        console.log("pass");
        return res.json(rows[0]);
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.board_delete = async (req, res, next) => {
    
}
