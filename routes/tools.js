const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send({
    tools: 'tools',
  });
});

module.exports = router;
