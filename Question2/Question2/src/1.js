const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "WPT_EXAM",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Succefully Connected!!!!");
  await connection.endAsync();
}

const user = {
  message: "Thank you very much sir You have cleared out all doubts",
};

async function addMessage(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `Insert into Message (message) values (?)`;
  await connection.queryAsync(sql, [user.message]);
  await connection.endAsync();
}

async function selectAll() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `Select * from Message`;
  const list = await connection.queryAsync(sql);
  console.log(list);
  await connection.endAsync();
}
connectionCheck();
addMessage(user);
selectAll();
