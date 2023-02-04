// Function Expression

// const tampilNama = function ( nama ) {
//     return `halo, ${nama}`
// }
// console.log(tampilNama('Koko'));




// Arrow function

// const tampilNama = (nama) => { return ` Halo, ${nama}`};
// console.log('Koko Koki')


// Parameter lebih dari satu

// const tampilNama = (nama, waktu) => { return ` Selamat ${waktu}, ${nama} `};
// console.log(tampilNama('koko', 'malam'));



// Parameter satu
// implisit return
// const tampilNama = nama => ` Halo, ${nama}`;
// console.log('Koko Koki');

// Tanpa parameter

// const tampilNama = () => 'hello world';
// console.log(tampilNama());



// let mahasiswa = ['koko', 'uus', 'kwonyuli'];

// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);



// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length}));
// console.table(jumlahHuruf);



// Konsep this pada arrow function

// Construtor Function
// const Mahasiswa = function() {
//     this.nama = 'koko',
//     this.umur = '29'
//     this.sayHello = function () {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }

// }

// const koko = new Mahasiswa();

// ARROW FUNCTION

// const Mahasiswa = function () {
//     this.nama = 'koko',
//     this.umur = '29'
//     this.sayHello =  () => {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }

// }

// const koko = new Mahasiswa();




// Object Literal
// const mhs1 = {
//     nama: 'koko',
//     umur: '29',
//     sayHello: function () {
//         console.log(`halo, nama saya adalah ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }




// const Mahasiswa = function() {
//     this.nama = 'koko',
//     this.umur = 29;
//     this.sayHello = function () {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const koko = new Mahasiswa();