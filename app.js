const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

// File system
const fs = require('fs');

app.set('view engine', 'ejs'); // добавил пакет для рендера прокси файлов

// добавил стили и изображения
app.use(express.static('public')); 

// рендеринг главной страницы
app.get('/', (req, res) => {
    res.render('form');
  });

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('О нас');
  });