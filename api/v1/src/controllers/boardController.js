const res = require('express/lib/response');
const boardService = require('../services/boardService');

exports.insertBoard = async (req, res) => {
    let board = [req.body.board_title, req.body.board_writer, req.body.board_content];
    try {
        boardService.insertBoard(board);
        res.redirect('/');
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.updateBoard = async (req, res) => {
    let data = [req.body.board_title, req.body.board_content, req.body.board_writer, req.body.board_uid];
    try {
        await boardService.updateBoard(data);
        let rows = await boardService.findOneBoard(req.body.board_uid);
        return res.render('read', {
            rows: rows[0]
        });
    } catch (err) {
        console.log(err);
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
    let board_uid = req.params.board_uid;
    try {
        let rows = await boardService.findOneBoard(board_uid);
        return res.render('read', {
            rows: rows[0]
        });
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

exports.updateBoardPage = async (req, res) => {
    let board_uid = req.params.board_uid;
    try {
        let rows = await boardService.findOneBoard(board_uid);
        res.render('update', {
            rows: rows[0]
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.deleteBoard = async (req, res) => {
    let board_uid = req.body.board_uid;
    try {
        await boardService.deleteBoard(board_uid);
        return res.redirect('/');
    } catch (err) {
        return res.status(500).json(err);
    }
}
