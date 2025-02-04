import { Request, Response } from "express";
import { Player, Tournament } from "./model";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";

export async function createTournament(req: Request, res: Response) {
  const id = uuidv4();
  const body: Tournament = req.body;
  if (body.players.length >= 3 && body.players.length <= 10) {
    db.set("tournament_index:" + id, id);
    db.set("tournament:" + id + ":name", body.name);
    db.set("tournament:" + id + ":players", JSON.stringify(body.players));
    res.json(id);
  } else {
    res.status(400);
    res.send(
      "Le nombre de joueurs n'est pas bon. Il doit être compris entre 3 et 10.",
    );
  }
}

function pool_lengths(player_number: number): number[] {
  let res: number[] = [];

  switch (player_number) {
    case 3:
      res = [3];
      break;
    case 4:
      res = [4];
      break;
    case 5:
      res = [5];
      break;
    case 6:
      res = [3, 3];
      break;
    case 7:
      res = [4, 3];
      break;
    case 8:
      res = [4, 4];
      break;
    case 9:
      res = [5, 4];
      break;
    case 10:
      res = [5, 5];
      break;
  }

  return res;
}

function make_pools(players: Player[], offsets: number[]): Player[][] {
  let res: Player[][] = [];
  let cursor = 0;
  let i = 0;

  while (players.length != cursor) {
    res.push(players.slice(cursor, cursor + offsets[i]));
    i++;
    cursor += offsets[i];
  }

  return res;
}

export async function getTournamentPools(req: Request, res: Response) {
  const id = req.params.id;

  const players: Player[] = JSON.parse(db.get("tournament:" + id + ":players"));
  const offsets = pool_lengths(players.length);

  res.json(make_pools(players, offsets));
}
