'use strict';
const BootBot = require('bootbot');
const dotenv = require('dotenv')
dotenv.config()
// console.log(process.env.ACCESS_TOKEN)
const bot = new BootBot({
  accessToken: process.env.VERCEL_ACCESS_TOKEN,
  verifyToken: process.env.VERCEL_VERIFY_TOKEN,
  appSecret: process.env.VERCEL_APP_SECRET
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});
 
bot.start();