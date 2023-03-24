'use strict';
const BootBot = require('bootbot');
const dotenv = require('dotenv')
dotenv.config()
// console.log(process.env.ACCESS_TOKEN)
const bot = new BootBot({
  accessToken: process.env.ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
  appSecret: process.env.APP_SECRET
});
 
bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});
 
bot.start();