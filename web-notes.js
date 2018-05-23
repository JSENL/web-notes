const notes = [];

const morgan = require('morgan');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// app.get('/', (req, res) => res.send('Existentially is anyone really alive?'))
// app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});

app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});
// Css File 
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));



app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Example app listening on port 3000! yay.'))

// app.delete('/notes/:id', (req, res) => {
//   if(req.params.id >= 0 && req.params.id < notes.length){ 
//     notes.splice(req.params.id, 1)
//       res.send('note deleted');
// } else{ 
//        res.status(404).send('not found stupid');
// }
// });

app.delete('/notes/:id',(req, res) => {
  if(req.params.id >= 0 && req.params.id < notes.length){
    notes.splice(req.params.id, 1);
    res.send ('***note deleted***');
  }else{
     res.status(404).send('what are you doing');
  }
 });

// app.delete('/notes', (req, res) => { 
//   notes.delete(req.body.note);
//   res.redirect('/');
// });

app.put('/notes/:id',(req, res) => {
  if(req.params.id >= 0 && req.params.id < notes.length){
    notes.splice(req.params.id, 1, req.body.note);
    res.send('***note putted***');
   } else{
     res.status(404).send('what are you doing');
   }
});
  

