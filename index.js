const express = require("express");
const app = express();
const port = 8080 || process.env.PORT;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {   
    console.log(`Server is running on http://localhost:${port}`);
});
app.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    // Here, you would normally save the newTodo to a database or a file
    console.log(newTodo);
    res.redirect('/');
});