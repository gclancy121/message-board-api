/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex,schema.createTable('waifus', waifu => {
    waifu.increments();
    waifu.string('name', 50).notNullable();
    waifu.string('description', 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('waifus');
};
