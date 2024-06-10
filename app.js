const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

// load public files
app.use(express.static("./public"));

app.use(methodOverride("_method"));

const port = 3000;

dbConnect();


// app.get("/", (req, res) => {
//     res.status(200);
//     res.send("Hello Node!");
// });


app.use(express.json());
app.use(express.urlencoded( {extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});