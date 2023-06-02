const express = require('express');

const app = express()

const bodyParser = require('body-parser');

const apiRouter = require('./router/api');
const btcRouter = require('./router/btc')
const xrpRouter = require('./router/xrp')
const batRouter = require('./router/bat')
const eosRouter = require('./router/eos')
const ethRouter = require('./router/eth')
const nulsRouter = require('./router/nuls')
const reqRouter = require('./router/req')
const trxRouter = require('./router/trx')
const zilRouter = require('./router/zil')
const zrxRouter = require('./router/zrx')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
    })

app.use('/', apiRouter);
app.use('/', btcRouter)
app.use('/', xrpRouter)
app.use('/', batRouter)
app.use('/', eosRouter)
app.use('/', ethRouter)
app.use('/', nulsRouter)
app.use('/', reqRouter)
app.use('/', trxRouter)
app.use('/', zilRouter)
app.use('/', zrxRouter)


const server = app.listen(3000,() => {
    console.log("server is listning on 3000")
});

app.server = server