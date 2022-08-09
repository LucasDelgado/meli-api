import express, { Express } from 'express';
import routerApi from './server/router';
import cors from 'cors';
import MiddleWaresError from './middlewares/error.handler';
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

//----ruteo
routerApi(app);

//----middlewares

//podemos logear y monotirear errores con algun servicio de terceros
app.use(MiddleWaresError.logErrors);

//manejamos el error en el contexto de la aplicacion
app.use(MiddleWaresError.errorHanlder);

//log state de la aplicacion
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
