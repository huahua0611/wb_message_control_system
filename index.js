"use strict";

// import mysql npm package
var mysql = require("mysql");

// databese name
let database = "******";

// connection database config
let connection = mysql.createConnection({
  host: "******",
  port: 2233,
  database: database,
  user: "******",
  password: "******",
});

// sql query language
let sql;

// tables name in the target database
let tablesName = [];

// connect database
connection.connect(function (err) {
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// get all tables name from my databese
sql = `SELECT table_name FROM information_schema.tables WHERE table_schema = '${database}'`;

connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  //   for (let index = 0; index < result.length; index++) {
  //     const element = result[index];
  //     tablesName.push(element);
  //   }
  //   console.log(tablesName);
});

//get each table from my database
// for (let index = 0; index < tablesName.length; index++) {
//   const element = tablesName[index].table_name;
//   sql = `SELECT * FROM ${element}`;

//   connection.query(sql, function (error, result) {
//     if (error) throw error;
//     console.log(result);
//   });
// }

// close connection
connection.end(function (err) {
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("The connection is terminated now");
});
