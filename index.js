process.env.NTBA_FIX_319 = 1;
import cherio from 'cherio'
import chalk from 'chalk'
import { parse } from 'node-html-parser';
import { getPageContent } from './helpers/puppeteer'
const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TOKEN';
const bot = new TelegramBot(token, {polling: true});
// const url = 'https://anonfiles.com/GY7yd48ho5';




bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    (async function main() {
        try {
            const pageContent = await getPageContent(msg.text);
            // console.log(pageContent);
            const parsedPageContent = parse(pageContent);
            var downloaderURL = parsedPageContent.querySelector('#download-url')._attrs.href
            console.log(downloaderURL)
            // const $ = cherio.load(pageContent)
            // const downloadLink
            // $('#download-url').each((i, header) => {
            //     const url = $(header).attr('href')
            // })
            // console.log(url)
            bot.sendDocument(chatId, downloaderURL);
            bot.sendMessage(chatId, downloaderURL);

        } catch (err) {
            console.log(chalk.red('Error \n'));
            console.log(err);
        }
    }
    
    )()

    // send a message to the chat acknowledging receipt of their message
    
  });
