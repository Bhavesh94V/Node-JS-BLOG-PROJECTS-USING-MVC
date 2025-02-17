const express = require('express');
const route = require('./Routes/userRouter');
const db = require('./config/db');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use('/user', route);

app.listen(9999, () => {
    console.log('Server is Listening on : 9999');
});
