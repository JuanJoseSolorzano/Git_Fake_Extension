# Open With - VSCode Extension

## 🚀 Overview  

The **Open With** extension for Visual Studio Code demonstrates how extensions can execute custom commands within the editor. As an example, this extension runs a PowerShell command to list the first five processes on the system, highlighting the potential security risks associated with installing untrusted extensions.  

## 🔥 Features  

- Executes a predefined PowerShell command directly from VSCode.  
- Displays the command output or any errors in a VSCode notification.  

## ⚠️ Disclaimer  

This extension is **for educational purposes only**. It serves as a reminder that VSCode extensions can execute potentially harmful commands, and users should only install **trusted** extensions from reputable sources.  

## 📌 Usage  

1. Install the extension in **Visual Studio Code**.  
2. Open the **Command Palette** (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS).  
3. Search for and run the command: **"Open With: Hello World"**.  
4. View the output or error messages in a VSCode notification.  

## 🛠 Development  

### ✅ **Prerequisites**  
Ensure you have the following installed before running or modifying the extension:  
- [Node.js](https://nodejs.org/)  
- [Visual Studio Code](https://code.visualstudio.com/)  
- PowerShell (required for executing the example command)  

### 🏧 **Running the Extension Locally**  
1. Clone this repository.  
2. Open the project in **Visual Studio Code**.  
3. Open the **Debug panel** (`Ctrl+Shift+D`).  
4. Select **"Run Extension"** and press **F5** to launch a new VSCode window with the extension running.  

### 📁 **Project Structure**  
- `src/extension.ts` → Main entry point of the extension.  

## 📝 License  

This project is licensed under the **MIT License**.  

