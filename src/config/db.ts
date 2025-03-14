import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
});

async function connectDB() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL Database Connected Successfully!");
    connection.release();
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
    process.exit(1); // Exit if database connection fails
  }
}

connectDB();

export default pool;
