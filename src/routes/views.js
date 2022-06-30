const { Router } = require("express");

const { renderHomePage } = require("../controllers/views");

const router = Router();

router.use("/", renderHomePage);

module.exports = router;
