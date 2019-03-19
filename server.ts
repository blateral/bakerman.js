import * as express from 'express';
import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = dev ? 3000 : 5001;

app.prepare().then(() => {
    const server = express();

    server.get('*', (req: express.Request, res: express.Response) => {
        return handle(req, res);
    });

    server.listen(port, (err: any) => {
        if (err) throw err;
        console.log(`Ready on port ${port}`);
    });
});
