import mysql from "mysql2/promise";

export const conection = await mysql.createPool({ 

  host: "localhost",
  user: "root",
  password: "181021",
  database: "feiraP"
  
});
