const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser")
const mysql = require('mysql');
const app = express();
app.use(bodyParser.json());
app.use(cors());

//app.use(express.static('public'))


const con = mysql.createPool({
    host: 'bbn0awf8kn61isubmbvq-mysql.services.clever-cloud.com',
    user: 'uoqniw0ichxuhefj',
    password: 'TD06iBReFfOHHSsX5TCG',
    database: 'bbn0awf8kn61isubmbvq',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})



app.get('/', (req, res) => {
    let query = "SELECT * from salon_db";
    con.query(query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(result);

        }
    })
})

app.get("/stylists/:id", (req, res) => {
    let id = req.params.id;
    let query = "SELECT * from salon_db where id=?";
    con.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(result);

        }
    })
})


app.post('/stylists/update-stylist', (req, res) => {
    let styler = req.body.styler;
    let query = "UPDATE salon_db SET name=?, lastName=?, role=?, image=?,smallDesc=? , description=?  where id=?";
    con.query(query, [styler.name, styler.lastName, styler.role, styler.image, styler.smallDesc, styler.description, styler.id], (err, result) => {
        if (err) return console.log(err);
        return console.log(result);;
    })
})




app.listen(5000, () => {
    console.log("listening");
})



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
// })


// const upload = multer({
//     storage: storage
// })


// app.post('/image', (req, res) => {
//     let { base64 } = req.body;
//     let query = `UPDATE salon_db SET image=? where id=6`;
//     con.query(query, [base64], (err, result) => {
//         if (err) return console.log(err);
//         console.log(result);
//     })
// })









