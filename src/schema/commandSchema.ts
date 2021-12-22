import * as mongoose from "mongoose";

const commandSchema = new mongoose.Schema({
	command: String,
	result: String
});

export const CommandModel = mongoose.model('Command', commandSchema);
