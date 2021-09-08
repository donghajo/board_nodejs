const boardService = require('../services/board-service');

exports.board_insert = async (req, res) => {
    let data = [req.body.board_title, req.body.board_writer, req.body.board_content];
    try{
        boardService.board_insert(data);
        res.redirect('/board/list');
    } catch(err){
        return res.status(500).json(err);
    }
}

exports.board_update = async (req, res) => {
    let data = [req.body.board_title, req.body.board_content, req.body.board_writer, req.body.board_uid];
    try{  
        boardService.board_update(data);
        return res.redirect('/board/list');
    } catch(err){
        return res.status(500).json(err);
    }
}

exports.board_read = async (req, res) => {
    try {
       let rows = await boardService.board_read();
       return res.render('index', {rows:rows});
    } catch(err){
        return res.status(500).json(err);
    }
}

exports.board_content = async (req, res) => {
    let id = req.params.board_uid;
    try{
        let rows = await boardService.board_content([id]);
        return res.render('read', {rows:rows[0]});
    }catch(err){
        return res.status(500).json(err);
    }
}


exports.board_read_insert = async (req, res) =>{
    return res.render('write');
}


exports.board_delete = async (req, res) => {
    let id = req.body.board_uid;
  try{
    boardService.board_delete(id);
    return res.redirect('/board/list');
  }catch(err){
    return res.status(500).json(err);
  }   
}
