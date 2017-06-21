const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const datas = require('./data').movies;

// Enable CORS so that we can make HTTP request
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization');
    next();
});

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());

app.get('/', (req, res) => {

    let verif = req.get('lol');
    if(verif === 'mdr') {
        res.status(200).send('hello Node');
    }
    else
        res.status(401).send('Sorry cant access');
});

/*const dataHandler = () => {
    datas.map(data => {
        let id = data.id;
        console.log(id);
        return id;
    });
 };

dataHandler();*/

app.route('/movies')
    .get((req, res, next) => {
        res.status(200).send(datas);
        next();
    })
    .post((req, res, next) => {
        datas.title = req.body.title;
        datas.category = req.body.category;
        datas.releaseYear = req.body.releaseYear;
        datas.poster = req.body.poster;
        datas.directors = req.body.directors;
        datas.actors = req.body.actors;
        datas.synopsis = req.body.synopsis;
        datas.rate = req.body.rate;
        datas.lastViewDate = req.body.lastViewDate;
        datas.price = req.body.price;
        res.send('Movie has been sended');
        next();
    });


app.route('/movies/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        res.status(200).send(datas[id - 1]);
        //res.status(400).send('Bad request');
        next();
    })
    .patch((req, res, next) => {
        const id = parseInt(req.params.id);
        console.log(datas[id -1].id, req.body.id, id);
        //if(datas[id - 1].id !== req.body.id) res.status(400).send('Bad request, you cant edit the id');
        datas[id - 1].id = id;
        datas[id - 1].title = req.body.title;
        datas[id - 1].category = req.body.category;
        datas[id - 1].releaseYear = req.body.releaseYear;
        datas[id - 1].poster = req.body.poster;
        datas[id - 1].directors = req.body.directors;
        datas[id - 1].actors = req.body.actors;
        datas[id - 1].synopsis = req.body.synopsis;
        datas[id - 1].rate = req.body.rate;
        datas[id - 1].lastViewDate = req.body.lastViewDate;
        datas[id - 1].price = req.body.price;
        res.status(200).send('Movie updated');
        next();
    })
    .put((req, res, next) => {
        const id = req.params.id;
        datas[id - 1].id = req.params.id;
        datas[id - 1].title = req.body.title;
        datas[id - 1].category = req.body.category;
        datas[id - 1].releaseYear = req.body.releaseYear;
        datas[id - 1].poster = req.body.poster;
        datas[id - 1].directors = req.body.directors;
        datas[id - 1].actors = req.body.actors;
        datas[id - 1].synopsis = req.body.synopsis;
        datas[id - 1].rate = req.body.rate;
        datas[id - 1].lastViewDate = req.body.lastViewDate;
        datas[id - 1].price = req.body.price;
        res.send({message: 'Movie has been over-writed'});
        next();
    })
    .delete((req, res, next) => {
        const id = req.params.id;
        console.log(datas[id - 1]);
        delete datas[id - 1];
        res.status(200).send('Movie deleted');
        //res.status(405).send('Not Allowed');
        next();
    });
app.listen(3000);