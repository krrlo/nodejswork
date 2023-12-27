require("dotenv").config({ path: "./db/mysql.env" });
const express = require("express");
const app = express();
const mysql = require("./db.js");
