# Telegram Bot Check NODE QUILL network (Node.js)
![image_2024-04-06_02-09-08](https://github.com/gituser6hij/telegram-bot-check-node-quill/assets/48154428/21b995c7-c789-4709-90c5-3d6e832ddc43)

## Overview
This project is aimed at creating a Telegram bot using Node.js to monitor system resources and display traffic statistics using vnstat, sysinfo, NODE command like -peer-id or -node-info. It also captures output from a tmux session and sends it as a message to the user. So you can check the console output directly in your telegram chat.

## Prerequisites
Before getting started, make sure you have the following:

1. Obtain a Telegram bot token from Botfather bot in the Telegram app.
2. Install vnstat (`sudo apt install vnstat`).
3. Install tmux (`sudo apt install tmux`).
4. Node.js installed (`sudo apt install node`).
5. Your node terminal should be launched in a tmux session named "frame" (tmux new -s frame).

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
1. Launch a tmux session named frame in your terminal:
   ```
   tmux new -s frame
   ```
   1. Launch your QUILL NODE:
   ```
   ./poor_mans_cd.sh
   ```
   2. Quit this tmux session CTRL B, D:
   ```
   CTRL B, D
   ```
2. Launch a new tmux session named telegram in your terminal:
   ```
   tmux new -s telegram
   ```
3. Run the bot script:
   ```
   node script-vnstat-node-bot.js
   ```
4. You can detach from the tmux session by pressing `CTRL + B`, then `D`.
5. To reattach to the tmux session later, run:
   ```
   tmux attach -t frame
   ```

6. Then it is time to speak with your bot on telegram and cheach out the /start command

7. Then you can edit your bot with BotFather in order to edit the commands:

```
output - Console output 5 lines.
peerid - Get Peer ID .
nodeinfo - Infos Node / Balance / Max Frame / Version / Peer Score.
vnstat - Infos Network.
sysinfo - Infos System Monitor.
start - Command list.
help - Help / Doc.
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
