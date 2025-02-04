import express, { Request, Response } from "express";
import process from "node:process";

// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 8080;

// Define the root path with a greeting message
app.get("/ping", (_req: Request, res: Response) => {
  res.send("PONG !");
});

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
