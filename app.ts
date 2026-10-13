import express, {type Express, type Request, type Response} from 'express';

const PORT = 3000;
const url = `http://localhost:${PORT}`;

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Backend is Running", Status : 200 });
});

app.post("/", (req: Request, res: Response) => {
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
