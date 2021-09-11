const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  return 'Hello world';
});

module.exports = router;
