import {ICommand} from "../interface/ICommand";
import {IPipeCommand} from "../interface/IPipeCommand";
import {exec} from "child_process";

export class Command implements ICommand {
	protected static execAsync(command: string, args: string[], options?: IPipeCommand): Promise<{command: string, result: string}> {
		return new Promise<{command: string, result: string}>((resolve, reject) => {
			const argsString = args.reduce((prev, arg) => `${prev} ${arg}`, '');
			let pipeString = '';

			if (options) {
				pipeString = `| ${options?.pipeCommand} ${options?.pipeParams}`;
			}

			const executedCommand = `${command} ${argsString} ${pipeString}`;

			exec(executedCommand, (err, stdout) => {
				if (err) {
					reject(err);
					return;
				}

				resolve({
					command: executedCommand,
					result: stdout
				});
			});
		})
	}

	execute(command: string, args: string[]): string {
		throw new Error('Method not implemented.');
	}
}
