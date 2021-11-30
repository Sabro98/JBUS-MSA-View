import * as express from 'express';
import * as morgan from 'morgan';
import viewRouter from './routers/ViewRouter';

const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.set('views', `${process.cwd()}/src/views`);

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use('/view', viewRouter);
app.use('/', (req: express.Request, res: express.Response) =>
  res.send('JBUS View Root!!!!!!')
);

export default app;
