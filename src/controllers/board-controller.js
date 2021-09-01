const boardService = require('../services/board-service');

exports.board_insert = async (req, res, next) => {
    var data = [req.body.board_title, req.body.board_writer, req.body.board_content];
    try{
        boardService.board_insert(data);
        res.redirect('/board/list');
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.board_read = async (req, res, next) => {
    try {
       let rows = await boardService.board_read();
       
       return res.render('index', {rows:rows});
    } catch(err){
        return res.status(500).json(err);
    }
}

exports.board_read_content = async (req, res, next) => {
    var idx = req.params.board_uid;
    try{
        let rows = await boardService.board_read_content(idx);
        return res.render('read', {title:"글 상세", rows:rows});
    }catch(err){
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
  let data = [req.body.board_uid];
  try{
    boardService.board_delete(data);
    return res.redirect('/board/list');
  }catch(err){
    return res.status(500).json(err);
  }
    
}
