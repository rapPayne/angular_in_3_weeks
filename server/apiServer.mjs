import jsonServer from 'json-server';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { loggingMiddleware } from './middlewares/logging-middleware.mjs';
import { authRouter } from './middlewares/authentication-middleware.mjs';
import { orderRouter } from './routers/order.router.mjs';

const port = 3008;

const app = jsonServer.create()
const router = jsonServer.router('database.json')
const middlewares = jsonServer.defaults(); // noCors b/c cookies aren't written when CORS is set to '*'
//app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(jsonServer.rewriter({ "/api/*": "/$1" }));

app.use(jsonServer.bodyParser)
app.use(loggingMiddleware)
app.use(middlewares)
app.use(cookieParser());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.header('Access-Control-Allow-Headers', '*')
//   next()
// })


authRouter(app);
//app.use(placeOrderRoute)
//app.use(getActiveOrdersRoute)
//app.use(getOrdersRoute)
//app.get("/orders/:id", getOrderRoute)
// app.use(orderRouter);

orderRouter(app)
app.use(router)

app.listen(port, () => {
  console.log(`API Server is running on port ${port}.`)
  console.log('Please keep it running during all lab exercises.')
});