// initialized express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res){
    res.json({
        Nama: 'Ricard Muhammad',
        TanggalLahir: '14 Januari 1994',
        JenisKelamin: 'Laki - Laki',
        Hobi: 'Membaca Buku'
    });
});

//express API
module.exports = router;