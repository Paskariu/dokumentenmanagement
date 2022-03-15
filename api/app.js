const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fP = require('./services/fileProcessing');
const uploadService = require('./services/uploadService')

// CONFIGURE APP
const app = express();
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/upload', async function(req, res) {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let file = req.files.file;
            let timestamp = Date.now();
            await uploadService.upload(req, res, file, timestamp).then(() => {
                fP.processfile(req, res, file, timestamp);
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000.")
})