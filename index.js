'use strict';
const BootBot = require('bootbot');
const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.ACCESS_TOKEN)
const bot = new BootBot({
  accessToken: process.env.ACCESS_TOKEN || `EAAMtQX1NaoQBALN423SgKMuZBpcZBPAqshcg0Q6UzjugTB6GKihnI6Bn4UX1lkvG3Jy3cyiWv8WhdCgTGAksnxpODOcyWU1ofMflWex6JE8vUZADQWsZBH3OOAyB7xZB2kFopD91zuRaZCkJZAI2CcRkHY5trckQj3n8adbDlZA8dfxyxiKPbZA0T`,
  verifyToken: process.env.VERIFY_TOKEN || "athackhiu",
  appSecret: process.env.APP_SECRET || "07e316f8452453f6c242e45edccccc36"
});
 
bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});
 
bot.start();