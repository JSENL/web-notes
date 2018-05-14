const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body',
  'Achieve nirvana'
];

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// app.get('/', (req, res) => res.send('Existentially is anyone really alive?'))
// app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});

app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Example app listening on port 3000! yay.'))