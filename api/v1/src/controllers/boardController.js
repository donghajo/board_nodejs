const boardService = require('../services/boardService');

exports.insertBoard = async (req, res) => {
    let data = [req.body.board_title, req.body.board_writer, req.body.board_content];
    try {
        boardService.insertBoard(data);
        res.redirect('/list');
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.updateBoard = async (req, res) => {
    let data = [req.body.board_title, req.body.board_content, req.body.board_writer, req.body.board_uid];
    try {
        boardService.updateBoard(data);
        return res.redirect('/list');
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.findAllBoard = async (req, res) => {
    try {
        let rows = await boardService.findAllBoard();
        return res.render('index', { rows: rows });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

exports.findOneBoard = async (req, res) => {
    let id = req.params.board_uid;
    try {
        let rows = await boardService.findOneBoard([id]);
        return res.render('read', { rows: rows[0] });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}


exports.insertBoardPage = async (req, res) => {
    try {
        res.render('write');
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

}


exports.deleteBoard = async (req, res) => {
    let id = req.body.board_uid;
    try {
        boardService.deleteBoard(id);
        return res.redirect('/');
    } catch (err) {
        return res.status(500).json(err);
    }
}
