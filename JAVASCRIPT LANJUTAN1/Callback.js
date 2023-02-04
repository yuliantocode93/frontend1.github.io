// Callback
// Synchronoud Callback
// function halo (nama) {
//     alert(`Halo ${nama}`);
// }

// const { get } = require("express/lib/response");

// function tampilkanPesan(Callback) {
//     const nama = prompt('masukan nama : ');
//     Callback(nama);
// }
// // tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo, ${nama}`));


const mhs = [
{
    "nama": "Mamad",
    "nrp": "04304003",
    "email": "mamad@gmail.com",
    "jurusan": "Teknik ",
    "idDosenWali": 1
},
{
    "nama": "Putri Sulistia",
    "nrp": "012040123",
    "email": "putri@gmail.com",
    "jurusan": "Teknik",
    "idDosenWali": 2
},
{
    "nama": "Kartika Dayati",
    "nrp": "034028999",
    "email": "kartika@gmail.com",
    "jurusan": "Teknik",
    "idDosenWali": 1
}

];

console.log('mulai')
mhs.forEach(m => {
    for (let i = 0; i < 10000000; i++) {
        let date = new Date();
    }
    console.log(m.nama)
});
console.log('selesai');



