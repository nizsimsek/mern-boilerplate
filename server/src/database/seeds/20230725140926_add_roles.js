/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { randomUUID } = require("crypto");

exports.seed = async function (knex) {
  await knex("roles").del();
  await knex("roles").insert([
    { id: randomUUID(), name: "super" },
    { id: randomUUID(), name: "user" },
  ]);
};
