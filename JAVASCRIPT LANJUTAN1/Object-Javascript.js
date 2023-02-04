// cara untuk membuat Object pada javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'koko',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'kiki',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }




// 2. Function Declaration

// const methodMahasiswa = {
//     makan : function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main : function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain`);
//     },

//     tidur : function (jam) {
//         this.energi += jam;
//         console.log(`halo ${this.nama}, selamat tidur`);
//     }

// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    

//  }
// 

// let koko = Mahasiswa('koko', 10);
// let koki = Mahasiswa('koki', 10);



// VERSI OBJECT PROTOTYPE 

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main`; 
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
// }

// let koko = new Mahasiswa('koko', 10);




// VERSI CLASS(versi CLASS lebih ringkas dan rapih)

// class Mahasiswa {
//     constructor (nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
// makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// }

// main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main`;
// }

// tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
//  }
// }

// let koko = new Mahasiswa('koko', 10);
// let koki = new Mahasiswa('koki', 20);


// let angka = [];
let angka = [1,2,3]; 
// console.log(angka);






// 3. Constractor Function ( akan memudahkan dalam membuat prototype )
// keyword new
// function Mahasiswa(nama, energi) {
    
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

// }

// let koko = new Mahasiswa ('koko', 10);



// 4. Object Create