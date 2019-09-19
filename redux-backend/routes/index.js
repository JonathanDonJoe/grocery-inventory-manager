var express = require('express');
var router = express.Router();
const db = require('../db');


router.get('/dairy-inv', (req, res, next) => {
	// 
	
	const getDairyQuery = `SELECT * FROM dairy`;
	db.query(getDairyQuery, (err, results) => {
		if (err) {
			throw err
		}
		res.json(results);
	})
	
	
})

module.exports = router;
