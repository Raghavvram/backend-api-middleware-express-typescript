const fun_post = (req, res) => {
  const data = req.body;
  res.status(201).json(data);
  console.log(data);
};

module.exports = { fun_post };
