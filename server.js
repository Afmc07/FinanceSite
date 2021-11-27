const dotenv = require('dotenv')
dotenv.config()

const express= require('express');
const expressLayouts= require('express-ejs-layouts')
const database= require('./src/database');
const routes= require('./src/routes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(port, async () => {
    await database.sync({ force: false });

    console.log(`Example app listening at http://localhost:${port}`);
});