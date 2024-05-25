require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');

const token = process.env.BOT_TOKEN; // Set 'BOT_TOKEN' with your actual bot token in .env
const bot = new TelegramBot(token, { polling: true });

// Help message to guide users on how to use the bot
const helpMessage = `Welcome to the telegram-bot-check-node-quill!

- /output - Console output.
- /peerid - Peer-id of the node.
- /nodeinfo - Info node.
- /vnstat - Info network.
- /sysinfo - System monitor.
- /start - Command list.
- /about - About page.
- /donation - Donation Addresses.`;


// Command to capture system resource information
bot.onText(/\/sysinfo/, (msg) => {
    // Execute commands to capture system information
    const sysinfoProcess = exec('uptime && free -h && df -h');

    // Wait for 10 seconds, then kill the sysinfo process
    setTimeout(() => {
        sysinfoProcess.kill();
    }, 10000);

    // Capture sysinfo output and send it as a message
    sysinfoProcess.stdout.on('data', (data) => {
        bot.sendMessage(msg.chat.id, 'System Information:\n' + data);
    });

    // Handle errors
    sysinfoProcess.on('error', (error) => {
        bot.sendMessage(msg.chat.id, 'Error: ' + error.message);
    });
});

// Command to display general information about vnstat
bot.onText(/\/vnstat/, (msg) => {
    exec('vnstat', (error, stdout, stderr) => {
        if (error) {
            bot.sendMessage(msg.chat.id, 'Error: ' + error.message);
            return;
        }
        if (stderr) {
            bot.sendMessage(msg.chat.id, 'Error: ' + stderr);
            return;
        }
        bot.sendMessage(msg.chat.id, 'Here is the general information about vnstat:\n' + stdout);
    });
});


const directoryPath = '~/ceremonyclient/node/'; // Define the absolute path to the directory
bot.onText(/\/peerid(?: (.+))?/, (msg, match) => {
    const chatId = msg.chat.id; // Get the chat ID
    const mode = match[1] || ''; // Extracting mode from command, if provided

    // Execute the shell command in the specified directory
    exec(`cd ${directoryPath} && GOEXPERIMENT=arenas go run ./... --signature-check=false -peer-id`, (error, stdout, stderr) => {
        if (error) {
            // Send error message if command execution failed
            bot.sendMessage(chatId, `Command execution failed: ${error.message}`);
            return;
        }
        if (stderr) {
            // Send error message if there's any stderr output
            bot.sendMessage(chatId, `Command execution produced an error: ${stderr}`);
            return;
        }
        // Send the command output to the user
        bot.sendMessage(chatId, `Command executed successfully:\n${stdout}`);
    });
});

// const directoryPath = '~/ceremonyclient/node/'; // Define the absolute path to the directory
bot.onText(/\/nodeinfo(?: (.+))?/, (msg, match) => {
    const chatId = msg.chat.id; // Get the chat ID
    const mode = match[1] || ''; // Extracting mode from command, if provided

    // Execute the shell command in the specified directory
    exec(`cd ${directoryPath} && GOEXPERIMENT=arenas go run ./... --signature-check=false -node-info`, (error, stdout, stderr) => {
        if (error) {
            // Send error message if command execution failed
            bot.sendMessage(chatId, `Command execution failed: ${error.message}`);
            return;
        }
        if (stderr) {
            // Send error message if there's any stderr output
            bot.sendMessage(chatId, `Command execution produced an error: ${stderr}`);
            return;
        }
        // Send the command output to the user
        bot.sendMessage(chatId, `Command executed successfully:\n${stdout}`);
    });
});

// Command to read the last 5 lines of output from tmux session
bot.onText(/\/output/, (msg) => {
    // Execute tmux command to capture last 5 lines of output
    exec('tmux capture-pane -p -t frame -S -5', (error, stdout, stderr) => {
        if (error) {
            bot.sendMessage(msg.chat.id, 'Error: ' + error.message);
            return;
        }
        if (stderr) {
            bot.sendMessage(msg.chat.id, 'Error: ' + stderr);
            return;
        }
        // Split the output into lines and limit the length of each line
        const lines = stdout.split('\n').slice(-5); // Keep only the last 5 lines
        const formattedOutput = lines.map(line => line.substring(0, 4000)); // Limit each line to 4000 characters

        // Send captured output as a message
        bot.sendMessage(msg.chat.id, 'Last 5 lines of output from tmux session:\n' + formattedOutput.join('\n'));
    });
});

// Command to start the bot and get instructions
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, helpMessage);
});

// Command to display available commands and instructions
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, helpMessage);
});

// Command to display about page
bot.onText(/\/about/, async (msg) => {
    const messages = [
        'Version: v1.0.0\n\nProject repository on GitHub: https://github.com/gituser6hij/telegram-bot-check-node-quill',
        'Dev: user137\nEmail: user137@protonmail.com\nTelegram: https://t.me/staiph',
        'Thank you for using telegram-bot-check-node-quill.'
    ];

    for (const message of messages) {
        try {
            await bot.sendMessage(msg.chat.id, message);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
});

// Command to display about page
bot.onText(/\/donation/, async (msg) => {
    const messages = [
        
        'EVM:',
        '0xCa429941000E55675e7a9B662DBa49b05bBFCc86',
        ' --- ',
        'BTC:',
        'bc1q9yxd77s7jljc0qmu9yyu2gw2m2untv9q0qrc2u',
        ' --- ',
        'kaspa:qpat8a9kw2drsmuy09q27xy8h279p3hhj6xx2zv07cun0nwmdsysxkgqv7paj',
        ' --- ',
        'Much appreciated!'


    ];

    for (const message of messages) {
        try {
            await bot.sendMessage(msg.chat.id, message);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
});

// Default message for unrecognized commands
bot.on('message', (msg) => {
    const message = msg.text.toString().toLowerCase();
    const commands = ['/start', '/sysinfo', '/peerid', '/vnstat', '/help', '/nodeinfo', '/output', '/about', '/donation'];

    if (!commands.includes(message)) {
        bot.sendMessage(msg.chat.id, 'Sorry, I don\'t understand that command. Please use /help to see the list of available commands.');
    }
});
