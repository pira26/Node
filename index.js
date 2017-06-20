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
    console.log(req.body);
    console.log(req.get('lol'));

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
        return id
    });
};

dataHandler();
 */

app.route('/movies')
    .get((req, res) => {
        res.status(200).send(datas);
    })
    .post((req, res) => {
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
        res.send({message: 'movie has been sended'});
    });


app.route('/movies/:id')
    .patch((req, res) => {

        let id = req.params.id;

        console.log(id);
        console.log(req.body.title);

        datas[id - 1]['title'] =  req.body.title;

        console.log(datas[id - 1]);

        res.status(200).send('ok');
    });

app.listen(3000);