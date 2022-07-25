// home controller
module.exports.home = (req, res) => {
  if (req.user.admin === true) {
    return res.redirect("/admin");
  } else {
    return res.redirect("/employee");
  }
};
