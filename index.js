const express = require('express');

const PORT = 3000;
const url = `http://localhost:${PORT}`;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Backend is Running" });
});

app.post("/", (req, res) => {
  const data = req.body;
  res.send(data);
  console.log(data);
})

app.listen(PORT, () => {
  import('terminal-link').then(({ default: terminalLink }) => {
    const link = terminalLink(url, url);
    console.log(`Server is running at: ${link}`);
  });
});
