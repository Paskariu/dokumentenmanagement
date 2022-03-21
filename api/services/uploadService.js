const fP = require('./fileProcessing');

async function upload(req, res, file, timestamp) {
    if (checkFileType(file)) {
        await file.mv('./uploads/' + timestamp + "-" + file.name);

        res.send({
            status: true,
            message: 'File is uploaded',
            data: {
                name: file.name,
                mimetype: file.mimetype,
                size: file.size
            }
        });
        fP.processfile(req, res, file, timestamp);
    } else {
        res.send({
            status: false,
            message: 'Filetype is not supported!'
        })
    }

}

function checkFileType(file, cb) {
    const fileTypes = ['application/pdf', //.pdf
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', //.docx
    ]
    if (fileTypes.includes(file.mimetype)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    upload
}