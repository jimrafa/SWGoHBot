// This is used for when you get your bot on a ton of servers. 
// At max, each shard should have ~2500 servers 

const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./swgohBot.js');
Manager.spawn(2); // This example will spawn 2 shards (5,000 guilds);
