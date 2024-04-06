# Telegram Bot Check NODE QUILL network (Node.js)
![image_2024-04-06_02-09-08](https://github.com/gituser6hij/telegram-bot-check-node-quill/assets/48154428/21b995c7-c789-4709-90c5-3d6e832ddc43)

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Commands](#commands)
6. [Links of Interest](#links-of-interest)
7. [Contributing](#contributing)
8. [License](#license)

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
   1. Launch your QUILL NODE from /ceremonyclient/node/:
   ```
   ./poor_mans_cd.sh
   ```
   2. Quit this tmux session CTRL B, D:
   ```
   CTRL B, D
   ```
2. Launch a new tmux session named telegram in your terminal from /telegram-bot-check-node-quill/:
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
peerid - Get Peer ID.
nodeinfo - Infos Node / Balance / Max Frame / Version / Peer Score.
vnstat - Infos Network.
sysinfo - Infos System Monitor.
start - Command list.
about - Contact.
```

![image](https://github.com/gituser6hij/telegram-bot-check-node-quill/assets/48154428/8e2454a9-067c-4f22-92ea-0284b320e295)
![image](https://github.com/gituser6hij/telegram-bot-check-node-quill/assets/48154428/90949049-f4d3-45a9-b599-b2374c637046)

## Links of interest:

1. **vnstat**:
   - Website: [vnstat.net](https://vnstat.net/)
   - GitHub Repository: [github.com/vergoh/vnstat](https://github.com/vergoh/vnstat)
   - Description: vnStat is a network traffic monitor for Linux and BSD. It keeps a log of network traffic for the selected interfaces and provides statistics about them.

2. **tmux**:
   - Website: [github.com/tmux/tmux](https://github.com/tmux/tmux)
   - Description: tmux is a terminal multiplexer that allows users to access multiple separate terminal sessions inside a single terminal window or remote terminal session. It is especially useful for remote administration and managing multiple tasks simultaneously.

3. **Telegram API**:
   - Documentation: [core.telegram.org/bots/api](https://core.telegram.org/bots/api)
   - Description: Telegram offers a comprehensive API that allows developers to create bots, integrate Telegram into their applications, and build custom solutions. It provides methods for sending and receiving messages, managing users and groups, and much more.

4. **Node.js**:
   - Official Website: [nodejs.org](https://nodejs.org/)
   - GitHub: [github.com/nodejs/node](https://github.com/nodejs/node)
   - Description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's designed to build scalable network applications and is known for its event-driven, non-blocking I/O model. With Node.js, developers can write server-side code using JavaScript, enabling full-stack development with a single language. It has a rich ecosystem of libraries and frameworks, making it popular for web and backend development.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## About dev
Dev: user137
Email: user137@protonmail.com
Telegram: https://t.me/staiph

Address ETH:
0xCa429941000E55675e7a9B662DBa49b05bBFCc86

Thank you for using telegram-bot-check-node-quill!


