const boardQuery = require('../queries/boardQuery');
const pool = require('../../../../database/pool');


exports.insertBoard = async (req) => {
    try {
        pool.query(boardQuery.insertBoard, req);
        return;

    } catch (err) {
        throw Error(err);
    }
}
exports.updateBoard = async (req) => {
    try {
        console.log(req);
        let rows = await pool.query(boardQuery.updateBoard, req);
        return rows[0];
    } catch (err) {
        throw Errow(err); s
    }
}

exports.findAllBoard = async () => {
    try {
        let rows = await pool.query(boardQuery.findAllBoard);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.findOneBoard = async (req) => {
    try {
        let rows = await pool.query(boardQuery.findOneBoard, req);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.deleteBoard = async (req) => {
    try {
        pool.query(boardQuery.deleteBoard, req);
        return;
    } catch (err) {
        throw Error(err);
    }

}
