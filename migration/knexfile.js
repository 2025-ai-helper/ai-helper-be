/* eslint-disable no-undef, @typescript-eslint/no-unused-vars */

module.exports = {
  client: "mysql2",
  connection: {
    database: process.env.CONF_DB_DATABASE || "ai-helper",
    host: process.env.CONF_DB_HOST,
    port: process.env.CONF_DB_PORT || 3306,
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    user: process.env.CONF_DB_USERNAME || "root",
    password: process.env.CONF_DB_PASSWORD || "",
  },
};
