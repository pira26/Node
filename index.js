'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const datas = require("./data");
const movies = datas.movies;
const helper = require("./helper");
const add = require("./addMovie");
const movieToRemove = require("./deleteMovie");
const movieToEdit = require("./editMovie");
const movieToModify = require("./modifyMovie");
const data = require("./movieManager");
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization');
    next();
});
app.use(bodyParser.urlencoded({ extended: true })); // create application/x-www-form-urlencoded parser
app.use(bodyParser.json()); // create application/json parser
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
});
app.get('/', (req, res) => {
    let verif = req.get('lol');
    if (verif === 'mdr') {
        res.status(200).send('Hello Node');
    }
    else
        res.status(401).send('Sorry cant access');
});
app.route('/movies')
    .get((req, res, next) => {
    res.status(200).send(movies);
    next();
})
    .post((req, res, next) => {
    let dataReq = req.body;
    if (typeof dataReq !== 'object')
        res.status(400).send('Movie is not an object');
    if (helper.testKeysInObj(dataReq, data.movieKeys))
        add.newMovie(dataReq);
    res.status(200).send(dataReq);
    next();
});
app.route('/movies/:id')
    .get((req, res, next) => {
    let id = req.params.id;
    res.status(200).send(movies[id - 1]);
    //res.status(400).send('Bad request');
    next();
})
    .patch((req, res, next) => {
    let id = parseInt(req.params.id);
    let dataReq = req.body;
    movieToModify.modify(movies, id, dataReq);
    res.status(200).send('Movie updated');
    next();
})
    .put((req, res, next) => {
    let id = parseInt(req.params.id);
    let dataReq = req.body;
    if (movies[id - 1].id !== id) {
        res.status(405).send('Need the same ID');
    }
    else {
        movieToEdit.edit(movies, id, dataReq);
        res.status(200).send('Movie has been over-writed');
    }
    next();
})
    .delete((req, res, next) => {
    let id = parseInt(req.params.id);
    movieToRemove.remove(movies, id);
    //if (movies.id === id) res.status(405).send('Not Allowed, movie already deleted');
    res.status(200).send('Movie deleted');
    next();
});
app.listen(3000);
//# sourceMappingURL=index.js.map