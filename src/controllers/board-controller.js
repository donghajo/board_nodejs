const boardService = require('../services/board-service');

exports.board_insert = async (req, res) => {
    let { board_uid } = req.body;
    try{
        let rows = await boardService.board_insert(board_uid);
        console.log("pass");
        return res.json(rows[0]);
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.board_read = async (req, res) => {
    let { board_uid } = req.params;
    try {
       let rows = await boardService.board_read(board_uid);
       console.log("pass_controller");
       console.log(rows);
       return res.render('index', {rows:rows})
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.board_read_insert = async (req, res) =>{
    res.render('insert', {board_title : "글 쓰기"});
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
