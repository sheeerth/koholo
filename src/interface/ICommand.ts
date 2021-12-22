export interface ICommand {
	execute(command: string, args: string[]): string;
}
