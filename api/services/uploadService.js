async function upload(req, res, file, timestamp) {
    if (checkFileType(file)) {
        file.mv('./uploads/' + timestamp + "-" + file.name);

        res.send({
            status: true,
            message: 'File is uploaded',
            data: {
                name: file.name,
                mimetype: file.mimetype,
                size: file.size
            }
        });
    } else {
        res.send({
            status: false,
            message: 'Filetype is not supported!'
        })
    }

}

function checkFileType(file, cb) {
    const fileTypes = ['application/pdf', //.pdf
        'application/msword', //.doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', //.docx
        'application/vnd.oasis.opendocument.text', //.odt
        'application/rtf', //.rtf
        'text/csv', //.csv
        'text/plain' //.txt
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