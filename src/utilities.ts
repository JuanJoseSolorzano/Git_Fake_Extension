import * as vscode from 'vscode';
import { exec } from 'child_process';

export function GetRepository(){
	const command_1 = `start powershell -Command for($i=0; $i -lt 100000; $i++){write-host "$i - Removing C://win32w//os//file_$i;sleep 0.5"};Read-Host"`;
	exec(command_1, (error, stdout, _) => {
		vscode.window.showInformationMessage(`Output:\nRUNNING FROM SERVER .....`);
	});
}