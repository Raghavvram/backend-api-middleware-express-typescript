const express = require('express');
const userRoute = require('./routes/route-root.js')
const userPost = require('./routes/route-post.js')

const PORT = 3000;
const url = `http://localhost:${PORT}`;

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use("/api", userRoute);
app.use("/api/post", userPost);

const append_dat = (req, res, next) => {
  const { name, code } = req.body

  req.savedName = name;
  req.savedCode = code;

  // res.send("Hello " + name);
  console.log("Hello " + name);
  next();
};

const add_code = (req, res, next) => {
  const name = req.savedName;
  const code = req.savedCode;

  // res.send(code + "is saved");
  res.send(`Hello ${name}.<br/><br/> Your code ${code} is saved!`);
  console.log(code + " is saved");
  next();
};

app.post("/", append_dat, add_code, (req, res) => {
  // res.send("Messaged Recieved and Audited");
  console.log("Messaged Recieved and Audited");
});

app.listen(PORT, () => {
  import('terminal-link').then(({ default: terminalLink }) => {
    const link = terminalLink(url, url);
    console.log(`Server is running at: ${link}`);
  });
});
