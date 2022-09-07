
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('waifus').insert([
    {waifu_name: "Sachi Komine", waifu_description: "The best girl you could ever want. She has it all - smart, loyal, kind, faithful, athletic. She can be incredibly sarcastic without meaning to, and she's a little bit airheaded too. She can even fight and disarm bombs. Granted, she has some...issues. Probably more than many other waifus that will be included in this list. But the emotions that are included in the route....what more could you possibly ask for in a waifu? In the eyes of the creator of this website and API, she's perfect.", waifu_birth_month: "September", waifu_birth_day: '23', waifu_picture: "https://s2.vndb.org/ch/64/76364.jpg"},
    {waifu_name: "Jill Stingray", waifu_description: "Probably the most attractive female that smokes that exists. Since you don't have to smell the smoke, you get the attractiveness of smoking anime girls without having to die of smoke inhalation! Plus she's always tired, very sarcastic, and can always make you a drink any time you ask. Sure, she might not be conventional, but this girl will always be a top tier waifu in my heart.", waifu_birth_month: 'June', waifu_birth_day: '27', waifu_picture: "https://b.thumbs.redditmedia.com/_ORrvYsyYQbN7bp0ZAaH0AP_x4fk41KTiKTyw638SLg.png"}
  ]);
};
