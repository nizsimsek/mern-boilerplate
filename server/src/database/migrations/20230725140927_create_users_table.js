/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema
    .createTable("users", (table) => {
      table.uuid("id").unique().primary();
      table.string("name").notNullable();
      table.string("surname").notNullable();
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table.boolean("verification").notNullable().defaultTo(false);
      table.uuid("role_id").notNullable();
      table.string("avatar").nullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("deleted_at").nullable();
    })
    .then(() => {
      console.log("Users table created successfully");
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
  knex.schema.dropTable("users");
  return;
};
