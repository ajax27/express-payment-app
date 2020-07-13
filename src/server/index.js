import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('I Love JavaScript!');
});

app.listen(7777, () => console.log('App listening on port: 7777'));
