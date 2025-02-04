import express, { Request, Response } from "express";
import process from "node:process";
import {createDB} from "./db";
import {createTournament} from "./tournament";



// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 8080;

const url = process.env.REDIS_URL;


app.use(express.json());



// Define the root path with a greeting message
app.get("/ping", (_req: Request, res: Response) => {
  res.send("PONG !");
});

app.post("/tournaments", createTournament);

createDB(url).then(app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
}));



