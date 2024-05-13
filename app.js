const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

// File system
const fs = require('fs');

app.set('view engine', 'ejs'); // добавил пакет для рендера прокси файлов

// добавил стили и изображения
app.use(express.static('public')); 

//модуль mongoDB
const MongoClient = require("mongodb").MongoClient;
 
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        console.log("Подключение установлено");
        // взаимодействие с базой данных
    }catch(err) {
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run().catch(console.log);

// рендеринг главной страницы
app.get('/', (req, res) => {
    res.render('index');
  });

app.get('/about', (req, res) => {
    res.send('О нас');
  });

  const urlencodedParser = express.urlencoded({extended: false});

  const newUser = app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.name} - ${request.body.mobile}`);
});


app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

