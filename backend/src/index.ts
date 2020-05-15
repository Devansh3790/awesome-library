import express from "express";

import { sequelize } from "./db/sequelize"

const app = express();
const port = process.env.PORT || '8000';

sequelize.sync({ force: true });

app.get('/', function (req, res) {
    res.json({ title: "Hello World", message: "Welcome to the Devansh Application" })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
