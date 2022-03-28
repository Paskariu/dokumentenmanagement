const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const searchService = require('./services/searchService');
const uploadService = require('./services/uploadService');
const metadataService = require('./services/metadataservice');
const dbService = require('./services/db');

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
                message: 'No file was provided'
            });
        } else {
            let file = req.files.file;
            let timestamp = Date.now();
            await uploadService.upload(req, res, file, timestamp);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/search', async(req, res) => {
    let files = await searchService.search(req.body.searchField);
    res.send(files);
});

app.get('/metadata', async(req, res) => {
    let meta = await metadataService.getMetaData(req.body.filename);
    res.send(meta);
})

app.post('/setmetadata', async(req, res) => {
    let meta = await metadataService.setMetaData(req.body.filename, req.body.data);
    res.send(meta);
})

await dbService.init();
const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}.`)
})