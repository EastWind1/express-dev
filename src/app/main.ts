import {Request, Response} from 'express';
import express from 'express';
import {format} from 'date-fns';
const app = express();
const logger = (req: Request, res: Response, next) => {
    console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss:SSS')}] - [${req.url}] - `) ;
    next();
};
app.use(logger);

app.get('/home', (req: Request, res: Response) => {
    res.send('hello world');
});


app.listen('8000', () => console.log('server start'));
