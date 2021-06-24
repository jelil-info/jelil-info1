var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});





//The codes below are codes for sending mail messages to my email address using mailgun
const sendMail = require('./mail2')

const log = console.log;

const path = require('path');

const PORT = 8080;


// Chunk 2
// Data parsing
app.use(express.urlencoded({
     extended: false
}));
app.use(express.json());

// email, subject, text
app.post('/email', (req, res)  => {
    // TODO:
    // send email here
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
          res.status(500).json({message: 'Internal Error'});
     
        } else {
          res.json({message: 'Email sent!!!!'});
        }
    });
});



app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'views','index.ejs' ));

});

