var express = require('express')
var router = express.Router()
const pool = require('../database/pool')

router.get('/:boardId', async (req, res, next) => {
  const { boardId } = req.params
  try {
    const data = await pool.query('select board_id, title, content from board where board_id = ?', [boardId])
    return res.json(data[0])
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.get('/', async (req, res, next) => {
  const { page, size } = req.query
  try {
    const data = await pool.query('select board_id, title from board limit ?, ?', [Number(page), Number(size)])
    return res.json(data[0])
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.post('/', async (req, res, next) => {
  const { title, content } = req.body
  try {
    const data = await pool.query('insert into board set ?', { title: title, content: content })
    return res.json(data[0])
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.patch('/:boardId', async (req, res, next) => {
  const { boardId } = req.params
  const { title, content } = req.body
  try {
    const data = await pool.query('update board set title = ?, content = ? where board_id = ?', [title, content, boardId])
    return res.json(data[0])
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.delete('/:boardId', async (req, res, next) => {
  const { boardId } = req.params
  try {
    const data = await pool.query('delete from board where board_id = ?', [boardId])
    return res.json(data[0])
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router