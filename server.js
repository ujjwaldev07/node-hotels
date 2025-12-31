const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser')
app.use((bodyParser).json());

const personRouter = require('./routers/personRoutes');
const menuItemRouter = require('./routers/menuItemRoutes');


app.use('/person', personRouter);
app.use('/menu', menuItemRouter);


app.listen(3000, ()=>{
     console.log('server is running on port 3000');
})