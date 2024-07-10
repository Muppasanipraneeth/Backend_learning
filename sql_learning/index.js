const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'office',
  password: 'praneeth'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

const getData = () => {
  return [
    faker.number.int(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

const insertData = () => {
  const q = 'INSERT INTO user (id, name, email, password) VALUES ?';
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push(getData());
  }

  connection.query(q, [data], (err, res) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Data inserted successfully:', res);
  });
}

insertData();

connection.end(err => {
  if (err) {
    console.error('Error closing the connection:', err);
    return;
  }
  console.log('Connection closed.');
});
