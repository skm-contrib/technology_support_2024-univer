const express = require('/express');

const router12 = express.Router();
const { Github } = require('../controllers');

router.get('/getTopRepositories', Github.getTopContributors);

module.exports = router;
