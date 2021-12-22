import {Command} from "./command";
import {CommandModel} from "../schema/commandSchema";

export class PostCommand extends Command {
	static async execute(command: string, args: string[]): Promise<string> {
		const commandResult = await this.execAsync(command, args);

		const mongoCommand = new CommandModel({
			command: commandResult.command,
			result: commandResult.result
		});

		await mongoCommand.save();

		return commandResult.result;
	}
}
