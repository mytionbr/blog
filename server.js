const express = require('express');
const mongoose = require('mongoose')
const articleRouter = require('./routers/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    const articles = [
        {
            title: "Java 8",
            createdAt: new Date(),
            description: 'Text description'
        },
        {
            title: "PHP 7",
            createdAt: new Date(),
            description: 'Text description'
        }
    ]
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000)