import express from "express";
import {PostCommand} from "./commands/postCommand";
import mongoose from "mongoose";

const app = express();
const port = 8080;

app.use(express.json());

main().catch(console.log);

async function main() {
    await mongoose.connect('mongodb://mongo:27017/koholo');
}

app.post( "/command", async ( req, res ) => {
    const {command, params} = req.body;
    const commandResult = await PostCommand.execute(command, params);

    res.json( { commandResult } );
} );

app.listen( port, () => console.log( `server started at http://localhost:${ port }` ));
