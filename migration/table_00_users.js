/* eslint-disable prettier/prettier, no-unused-vars */

module.exports.auto = (migrator, knex) => {
  return [
    migrator("users", (table) => {
      table.bigIncrements("id").unsigned().comment("Primary Key for Table.");
    }),
  ];
};
