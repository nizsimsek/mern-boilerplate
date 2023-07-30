/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { randomUUID } = require("crypto");
const hashData = require("../../utils/hashData");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: randomUUID(),
      name: "super",
      surname: "admin",
      email: "super@admin.com",
      password: hashData("123456Kc"),
      verification: true,
      role_id: await knex("roles")
        .where({ name: "super" })
        .first()
        .then((role) => role.id),
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    },
    {
      id: randomUUID(),
      name: "student",
      surname: "user",
      email: "student@user.com",
      password: hashData("123456Kc"),
      verification: true,
      role_id: await knex("roles")
        .where({ name: "user" })
        .first()
        .then((role) => role.id),
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    },
  ]);
};
