const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers', (req, res )  => {
    res.send(
        [{
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : 'cccc',
            'birthday' : '99 99 99',
            'gender' : '男',
            'job' : 'programer'
        },
        {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : 'dddd',
            'birthday' : '88 88 99',
            'gender' : '女',
            'job' : 'programer'
        },
        {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : 'aaaa',
            'birthday' : '77 99 99',
            'gender' : '男',
            'job' : 'programer'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));