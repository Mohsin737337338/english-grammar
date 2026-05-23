# 💻 Build Windows Desktop .exe Guide

This application is fully pre-configured to be packaged as a native, fully offline Windows desktop application (`.exe`) using **Electron** and **electron-builder**.

Since packaging a native `.exe` binary requires a local Windows registry and native build tools (compiling directly on a Linux-based cloud preview container would fail or result in compatibility issues), follow these simple steps to build your custom installer on your computer:

---

## Step 1: Export & Download the Zip
1. On **Google AI Studio**, look at the top-right header layout or settings bar.
2. Click the **Export / Download** button.
3. Choose **Download as ZIP** (or export to your GitHub account).
4. Save the `.zip` file to your computer and extract it into a folder.

---

## Step 2: Install Node.js
If you don't have Node.js installed on your computer yet:
1. Go to [nodejs.org](https://nodejs.org/).
2. Download and install the **LTS** version (includes `npm`).

---

## Step 3: Run the Desktop Build Commands
Open your terminal (PowerShell, Command Prompt, or Git Bash) inside the extracted directory and run:

```bash
# 1. Install all dependencies (including electron development tools)
npm install

# 2. Build the app and package it into a Windows portable .exe file
npm run build:win
```

---

## 🛠️ Output Deliverables
Once the build completes, a brand new `dist-desktop/` folder will appear in your project root containing:
* **`English Grammar Handbook Portable.exe`** - A standalone, fully portable application you can run, send to friends, or copy to a USB drive with zero installation!
* **`English Grammar Handbook Setup.exe`** - A standard Windows installer that registers the app to your Start Menu and Desktop.

Have fun with your offline English Grammar Desktop Application!
