// function init() {
//     // let nama = 'koko'
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('koko');
// panggilNama('kiki');


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// // selamatPagi('koko');
// // selamatSiang('kiki');
// // selamatMalam('koki');

// console.dir(selamatMalam('koko'));



let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
   
})();

// let a = add();

counter = 100;

console.log(add());
console.log(add());
console.log(add());