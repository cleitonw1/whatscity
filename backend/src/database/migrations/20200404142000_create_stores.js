exports.up = function(knex) {
  return knex.schema.createTable("stores", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.string("whatsapp").notNullable();
    table.string("category").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("stores");
};
