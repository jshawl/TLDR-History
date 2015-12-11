// GET /
function home(req, res) {
  res.render('/public/index.html');
}

module.exports = {
  home: home
};
