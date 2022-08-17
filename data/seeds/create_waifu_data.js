
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('waifus').insert([
    {waifu_name: "Sachi Komine", waifu_description: "The best girl you could ever want. She has it all - smart, loyal, kind, faithful, athletic. She can even fight and disarm bombs. What more could you possibly ask for in a waifu?"},
    {waifu_name: "Tomo Aizawa", waifu_description: "A fantastic waifu. Sporty, tall, redheaded, muscular - she could probably kill you with her thighs if she wanted to. And that's what makes this tomboy best girl."},
    {waifu_name: "Holo the Wise Wolf", waifu_description: "An absolutely classic waifu. She's the wolf girl that got a generation into wolf girls. She's snarky, cute, smart, and enjoys a good drink. While she may spend a lot of money, she always manages to make it all back, and usually with more than she spent in the first place. The undisputed queen of commerce, she was many weebs first waifu, and still holds a special place in the heart of this API writer."},
    {waifu_name: "Amane Suou", waifu_description: "This tall, red-haired, busty beauty is from the same series as this API's favorite waifu, Sachi Komine. She's the ultimate housewife - she loves cooking and cleaning, and she's also absurdly good at spending money. She can find a good deal anywhere. She's also...let's say 'exciteable'."}
  ]);
};
