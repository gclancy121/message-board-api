/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('waifus').insert([
    {waifu_name: "Sachi Komine", waifu_description: "The best girl you could ever want. She has it all - smart, loyal, kind, faithful, athletic. She can even fight and disarm bombs. What more could you possibly ask for in a waifu?"},
    {waifu_name: "Tomo Aizawa", waifu_description: "A fantastic waifu. Sporty, tall, redheaded, muscular - she could probably kill you with her thighs if she wanted to. And that's what makes this tomboy best girl."}
  ]);
};
