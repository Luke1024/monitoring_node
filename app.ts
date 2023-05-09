import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userService from './src/user-service';

const app = express();
const port = process.env.PORT || 3000;



app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/input/auth', (req: Request, res: Response) => {
  userService.preAuth(req.cookies, res);
});

app.post('/input/load', (req: Request, res: Response) => {
  const message = req.body.message;
  const cookies = req.cookies;
  const result = userService.saveAction(message, cookies);
  res.json({ success: result });
});

app.post('/input/contact', (req: Request, res: Response) => {
  const contactDto = req.body;
  const cookies = req.cookies;
  const result = userService.saveContact(contactDto, cookies);
  res.json({ success: result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
