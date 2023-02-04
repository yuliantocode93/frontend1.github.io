// EXECUTION CONTEXT, HOISTING & SCOPE

// const { set } = require("express/lib/application");

// console.log(nama);
// var nama = 'koko';

// creation phase pada global context
// nama var = undefined
// nama function = finally()
// hoisting
// window = global object
// this = window
// execution phase


// console.log(sayHello);

// var nama = 'koko';
// var umur = 29;


// function sayHello() {
//     return(`halo, nama saya ${nama}, saya ${umur} tahun.`)
// }

// function membuat local execution context
// yang didalamnya terdapat creation dan execition phase
// window
// arguments
// hoisting




// var nama = "koko";
// var username = "@koko";

// function cetakURL (username) {
//     var isntagramURL = "http://instagram.com/";
//     return isntagramURL + username;
// }

// console.log(cetakURL(username));

// function satu() {
//     var nama = "koko";
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = "erik";
// satu();
// dua("doddy");
// console.log(nama);





// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");

//         function c() {
//             console.log("ini c");
//         }

//         c();
//     }
//     b();
// }
// a();

// MEMBUAT ANIMASI PADA BOX

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});