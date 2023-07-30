const express = require("express");
const { resolve } = require("node:path");
const expressSession = require("express-session");

const sessionStore = require('connect-session-knex')(expressSession);

module.exports = app => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(resolve("dist"), { index: false, cacheControl: true }));

  app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "niz-secret",
    store: new sessionStore({
      knex: require("../database/connection"),
      tablename: "sessions",
      createtable: true,
    })
  }))
};