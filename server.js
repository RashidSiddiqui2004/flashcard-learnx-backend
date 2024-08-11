const express = require('express')
const cors = require('cors')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers 
const cardRouter = require('./routes/cardRouter');
const connection = require('./config/dbconfig');

app.use('/api/cards', cardRouter);

// app.get('/cards', (req, res) => {
//     connection.query("SELECT * FROM flashcards", (err, rows) => {
//         if (err) {
//             console.log(err);
//         } else { 
//             res.send({ "cards": rows });
//         }
//     })
// })

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
