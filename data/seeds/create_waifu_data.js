
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('waifus').insert([
    {waifu_name: "DOOM Eternal", waifu_description: "An absolutely fantastic DOOM game. Personally, it's my favorite out of them, but I can see why some people think the older titles are better. Personally, this is the DOOM game that got me into the DOOM franchise, along with 2016. I've tried playing the older ones, but they just don't feel as good to play.", waifu_birth_month: "March", waifu_birth_day: '2020', waifu_picture: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png"},
    {waifu_name: "Minecraft", waifu_description: "A childhood classic. I grew up playing this game, and I've spent god knows how many hours trying to get mods to work for it back when I was a young and dumb 13 year old. I don't play it anywhere near as much anymore, since I'm pretty sure I've burned myself out of it almost completely, but it was an important part of my childhood and deserves to be here.", waifu_birth_month: 'November', waifu_birth_day: '2011', waifu_picture: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"}
  ]);
};
