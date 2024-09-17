import { Hono } from 'hono'
import { userrouter } from './routes/user';
import { blogrouter } from './routes/blog';
import { cors } from 'hono/cors';

export const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>();

app.use('/api/*', cors());
app.route('/api/v1/user' , userrouter );
app.route('/api/v1/blog' , blogrouter );


export default app
