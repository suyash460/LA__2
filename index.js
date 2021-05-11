const express = require("express");
const app = express();
const PORT = 3000;


app.use('/moon', express.static('public'));
app.use('/sun', express.static('images'));

app.get('/', (req, res) => {
    res.send("This is LA_2");
});

app.get('/moon', (req, res) => {
    res.send("Welcome");
});

app.get('/sun', (req, res) => {
    res.send("Welcome");
});


app.listen(PORT, ()=> console.log(`Server Listening on port : ${PORT}`));




