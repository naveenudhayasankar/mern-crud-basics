const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const databaseConfig = require("./configurations/database");
const todo = require("./routers/todo.routes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

databaseConfig();

app.use(express.json({extended: false}));
app.use(cors({origin: true, credentials: true}));

app.get('/', (req, res) => {
    res.send('<h1> Server is up and running </h1>')
});

app.use("/api/todoapp", todo)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

