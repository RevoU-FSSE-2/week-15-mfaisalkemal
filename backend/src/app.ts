import express, { Request, Response, NextFunction } from 'express';
import globalMiddleware from './middlewares'

import { simpleRoute } from './routes/simpleRoute';

const app = express();

globalMiddleware(app);

app.use(simpleRoute);



app.get('/', (req, res) => {
    res.send('week-15-mfaisalkemal');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

export default app;