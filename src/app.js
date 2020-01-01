import '@babel/polyfill';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';

import routes from './routes';
import Controller from './routes/Controller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(morgan('combined'));

Controller.createRolesAndSuperAdmins();

app.use('/', routes);
app.get('*', (req, res) => res.status(200).json({ message: 'Project started' }));


export default app;
