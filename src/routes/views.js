const { Router } = require("express");

const { renderHomePage, renderMovies, renderMovie } = require("../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/movies", renderMovies);
router.get("/movies/:id", renderMovie);

module.exports = router;
