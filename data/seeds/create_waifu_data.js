/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
await knex('waifus').insert([
  {waifu: 'Sachi Komine', description: "The best girl around. The ultimate waifu that you could ever want. She can cook, clean, fight, and is absurdly loyal. What more could you want?"},
  {waifu: "Tomo Aizawa", description: "An absolutely fantastic waifu. The queen of tomboys, and the titular character of an incredibly popular short manga series that is *finally* getting an anime soon."}
])
};
