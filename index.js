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

app.listen(PORT, () => {
  import('terminal-link').then(({ default: terminalLink }) => {
    const link = terminalLink(url, url);
    console.log(`Server is running at: ${link}`);
  });
});
