
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080
const conn = require('./database/database');
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

// arquivos staticos 
app.use(express.static('public'));

// view engine 
app.set('view engine', 'ejs');

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Database 
conn
    .authenticate()
    .then(()=>{
        console.log('Conexao com sucesso');
    }).catch((erro)=>{
        console.log(erro);
    })

app.use('/',categoriesController);
app.use('/',articlesController);


app.get('/', (req, res) => res.render('index'))
app.listen(port, () => console.log(`Example app listening on port port!`))
