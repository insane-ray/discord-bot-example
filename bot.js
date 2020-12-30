require('dotenv').config();
const fs = require("fs");
const { BotConstructor } = require("discord-bot-constructor");

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;
const actions = JSON.parse(fs.readFileSync('actions.json', 'utf8'));

const botConstructor = new BotConstructor({
  token: token,
  prefix: prefix,
  config: actions
});
