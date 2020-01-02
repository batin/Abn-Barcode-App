const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: { 
    options: {
      userName: "abnadmin", // update me
      password: "Abn321**" // update me
    },
    type: "default"
  },
  server: "185.28.62.14", // update me
  options: {
    database: "efyazilim_Db", //update me
    encrypt: false
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT URUN_ADI
     FROM dbadmin1.Urunler`,
    (err, rowCount) => {
      if (err) {
        // console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}