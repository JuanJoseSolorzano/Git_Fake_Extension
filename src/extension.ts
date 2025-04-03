// Author: Juan Jose Solorzano
// Date: 2023-10-01

import * as vscode from 'vscode';
import { GetRepository } from './utilities';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('fake-extension-test.Git_Fake', async () => {
		GetRepository();
	});
	context.subscriptions.push(disposable);
	// Create and show the status bar item during activation
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	statusBarItem.text = '$(repo-clone) GIT CLONE (FAKE)';
	statusBarItem.tooltip = 'Click to clone a repository recursively';
	statusBarItem.command = 'fake-extension-test.Git_Fake';
	statusBarItem.show();
	context.subscriptions.push(statusBarItem);
}

// This method is called when your extension is deactivated
export function deactivate() {}
