const express = require('../node_modules/express');

const router = express.Router();
const { Github } = require('../controllers');

router.get('/getTopRepositories', Github.getTopContributors);

module.exports = router;
