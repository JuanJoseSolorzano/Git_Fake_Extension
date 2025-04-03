# Open With VSCode Extension

## Overview

The **Open With** extension for Visual Studio Code allows users to execute custom commands directly from the editor. This extension demonstrates how to run a PowerShell command to list the first five processes on the system to show that vscode extensions could be malicious.
## Features

- Execute a predefined PowerShell command.
- Display the output or errors in a VSCode notification.

## Usage

1. Install the extension in Visual Studio Code.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
3. Search for and run the command: `Open With: Hello World`.
4. View the output or any errors in a notification.

## Development

### Prerequisites

- Node.js
- Visual Studio Code
- PowerShell (for the example command)

### Running the Extension

1. Clone the repository.
2. Open the project in Visual Studio Code.
3. Run the `Run Extension` target from the Debug panel.

### File Structure

- `src/extension.ts`: Main entry point for the extension.

## License

This project is licensed under the MIT License.
