"use strict";
const BootBot = require("bootbot");
const dotenv = require("dotenv");
const t1 = `EAAMtQX1NaoQBANVq4F2U4KoeRef5e`
const t2 = `xHz2AJZCFA2GChurrTbTJKZAoLPbe6GRm7CMZAjp3NAqppVBb7aRsryYrx7kmnRh`
const t3 = `8EnUwcYIQxaZAY03cg6ocqsZATwFYpyTZBYxWJxJTji5mLpfU`
const t4 = `JgyFLjsMQPrTZCc7xfEhJZCayHZCziWbwCI2ZC5OOQKW`
const token = `${t1}${t2}${t3}${t4}`

dotenv.config();
console.log(process.env.ACCESS_TOKEN);
const bot = new BootBot({
  accessToken:
    process.env.ACCESS_TOKEN || token,
  verifyToken: "athackhiu",
  appSecret: process.env.APP_SECRET || "07e316f8452453f6c242e45edccccc36",
});

bot.on("message", (payload, chat) => {
  const text = payload.message.text;
  console.log(`The user said: ${text}`);
  chat.say(`Hi I'm Lili`)
});

// bot.hear(["hello", "hi", /hey( there)?/i], (payload, chat) => {
//   console.log('The user said "hello", "hi", "hey", or "hey there"');
// });

// bot.hear(["hello", "hi", /hey( there)?/i], (payload, chat) => {
//   console.log('sending a message ...')
//   // Send a text message followed by another text message that contains a typing indicator
//   chat.say("Hello, human friend!").then(() => {
//     chat.say("How are you today?", { typing: true });
//   });
// });

// bot.hear(["food", "hungry"], (payload, chat) => {
//   // Send a text message with quick replies
//   chat.say({
//     text: "What do you want to eat today?",
//     quickReplies: ["Mexican", "Italian", "American", "Argentine"],
//   });
// });

// bot.hear(["help"], (payload, chat) => {
//   // Send a text message with buttons
//   chat.say({
//     text: "What do you need help with?",
//     buttons: [
//       { type: "postback", title: "Settings", payload: "HELP_SETTINGS" },
//       { type: "postback", title: "FAQ", payload: "HELP_FAQ" },
//       { type: "postback", title: "Talk to a human", payload: "HELP_HUMAN" },
//     ],
//   });
// });

// bot.hear("image", (payload, chat) => {
//   // Send an attachment
//   chat.say({
//     attachment: "image",
//     url: "http://example.com/image.png",
//   });
// });

bot.start();
