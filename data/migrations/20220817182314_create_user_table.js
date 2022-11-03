/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', user => {
    user.increments('user_id');
    user.string('username', 50).unique().notNullable();
    user.string('password', 128).notNullable();
    user.string('about_me', 3000).notNullable().defaultTo("I'm a new gamer and haven't changed this yet.");
    user.string('profile_picture').notNullable().defaultTo('https://st2.depositphotos.com/6027554/9528/v/950/depositphotos_95282974-stock-illustration-tetris-block-background-with-i.jpg');
    user.string('fav_waifu').notNullable().defaultTo('Tetris');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
