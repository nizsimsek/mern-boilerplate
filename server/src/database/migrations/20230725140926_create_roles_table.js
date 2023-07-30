/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema
    .createTable("roles", (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("deleted_at").nullable();
    })
    .then(() => {
      console.log("Roles table created successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  return;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("roles");
  return;
};
