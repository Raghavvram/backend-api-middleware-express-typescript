const fun_post = (req, res) => {
  const data = req.body;
  res.json(data);
  console.log(data);
};

module.exports = { fun_post };
