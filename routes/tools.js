const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    tools: 'tools',
  });
});

router.get('/:id', (req, res) => {
  res.send({
    id: 'tools',
  });
});

router.post('/', (req, res) => {
  res.send({
    post: 'post',
  });
});

router.delete('/:id', (req, res) => {
  res.send({
    delete: 'delete',
  });
});
module.exports = router;
