const path = require("path");

const renderHomePage = (req, res) => {
  console.log("render homepage");
  //   const filePath = path.join(__dirname, "../../public/index.html");

  //   //send file
  //   return res.sendFile("filePath");
};

const renderMovies = (req, res) => {
  console.log("render movies");
  //   const filePath = path.join(__dirname, "../../public/index.html");

  //   //send file
  //   return res.sendFile("filePath");
};

const renderMovie = (req, res) => {
  console.log("render movie");
  //   const filePath = path.join(__dirname, "../../public/index.html");

  //   //send file
  //   return res.sendFile("filePath");
};

module.exports = { renderHomePage, renderMovies, renderMovie };
