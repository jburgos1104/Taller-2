const express = require('express');
const router = express.Router();
const { getPokeneaJson, getPokeneaFilosofia, getPokeneaById, getPokeneaFilosofiaById } = require('../controllers/pokeneaController');


router.get('/pokenea', getPokeneaJson);
router.get('/filosofia/:id', getPokeneaFilosofiaById);

module.exports = router;
