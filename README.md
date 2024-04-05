# Telegram Bot Check NODE QUILL network (Node.js)

## Overview
This project is aimed at creating a Telegram bot using Node.js to monitor system resources and display traffic statistics using vnstat. It also captures output from a tmux session and sends it as a message to the user.

## Prerequisites
Before getting started, make sure you have the following:

- Obtain a Telegram bot token from Botfather bot in the Telegram app.
- Install vnstat (`sudo apt install vnstat`).
- Install tmux (`sudo apt install tmux`).
- Node.js installed (`sudo apt install node`).
- Your node terminal should be launched in a tmux session named "frame" (tmux new -s frame).

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Create a `.env` file at the root of the project with the following content:
   ```
   BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
   ```
   Replace `YOUR_TELEGRAM_BOT_TOKEN` with the token obtained from Botfather.
   
## Usage
1. Launch a tmux session named telegram in your terminal:
   ```
   tmux new -s telegram
   ```
2. Run the bot script:
   ```
   node script.js
   ```
3. You can detach from the tmux session by pressing `CTRL + B`, then `D`.
4. To reattach to the tmux session later, run:
   ```
   tmux attach -t frame
   ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
