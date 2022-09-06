
exports.up = function(knex) {
  return knex.schema.createTable('waifus', waifu => {
    waifu.increments('waifu_id');
    waifu.string('waifu_name', 50).unique().notNullable();
    waifu.string('waifu_description', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('waifus');
};
