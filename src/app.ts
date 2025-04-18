import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware';
import router from './routes/index';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/v1", router)

app.use(errorMiddleware); // Global error handler

export default app;
