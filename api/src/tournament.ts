import { Request, Response } from "express";
import {Tournament} from "./model"
import { v4 as uuidv4 } from 'uuid';
import { db } from './db'


export async function createTournament (req: Request, res: Response) {
    const id = uuidv4();
    const body: Tournament = req.body;
    if(body.players.length >= 3 && body.players.length <= 10){
        db.set("tournament_index:" + id, id)
        db.set("tournament:" + id + ":name", body.name)
        db.set("tournament:" + id + ":players", JSON.stringify(body.players))
        res.json(id);
    } else {
        res.status(400);
        res.send("Le nombre de joueurs n'est pas bon. Il doit être compris entre 3 et 10.");
    }
}