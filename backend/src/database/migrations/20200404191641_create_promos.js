exports.up = function(knex) {
  return knex.schema.createTable("promos", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.string("imgUrl").notNullable();
    table.string("imgUrlSmall").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("promos");
};
