const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute');
const cors = require("cors")
const path = require('path');
const cookies = require("cookie-parser");
const isAuth = require('./middlewares/auth');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// image
app.use(cookies())
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'view'))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/user", userRouter)

app.get("/", isAuth,(req, res) => {
    res.render('index', { title: 'node' })
})

app.listen(8090, () => {
    console.log('listening on port 8090');
    connectDB();
})