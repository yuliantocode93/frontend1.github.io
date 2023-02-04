// manipulasi array

// const { location } = require("express/lib/response");

//1. menambah isi array
/*
let arr = [];
arr[0] = "koko";
arr[1] = "cici";
arr[2] = "nofa";
arr[6] = "doddy";

console.log(arr);
*/
// 2. menghapus isi array
/*
let arr = ["koko", "cici", "nofa"];
arr[1] = undefined;
console.log(arr);
*/

// 3. menampilkan isi array
/*
let arr = ["koko", "cici", "nofa"];

for( let i = 0; i < arr.length; i++ ) {
    console.log('mahasiswa ke-' + (i+1) + ':' + arr[i]);
}
*/

// method pada array
// let arr = ['koko', 'cici', 'nofa'];
// 1. join
// console.log(arr.join('-'));

// 2. push & pop
// arr.push('doddy', susi);

// arr.pop();
// console.log(arr.join('-'));

// 3. unshift & shift
// arr.unshift('dody');
//arr.shift();
//console.log(arr.join('-'));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Doddy', 'fitri');
// console.log(arr.join('-'));

// 5. slice
// slice(awal, akhir)
// let arr = ['koko', 'cici', 'nofa', 'doddy', 'fitri'];
// let arr2 = arr.slice(1,3);
// log(arr2.join ('-'));

// 6. foreach
// let angka = [1,2,3,4,5,6,7,8];
// let nama = ['koko', 'cici', 'nafa', 'doddy'];
/*
for (var i = 0; i < angka.lenght; i++){
    console.log(angka[i]);
}
*/
/* angka.forEach(function(e){
    console.log(e);
});
*/
/*
nama.forEach(function(e, i){
    console.log('mahasiswa ke-' + (i+1) + ' adalah :' + e);
})
*/
// 7. map
/*
let angka = [1,2,5,3,6,8,4];
let angka2 = angka.map(function(e){
    return e * 2;
})
 console.log(angka2.join(' - '));
 */

 // 8. sort
 /*
let angka = [1, 2, 5, 3, 6, 8, 4];
let angka = [1, 10, 20, 4, 3, 2, 6, 7, 100];
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join (' - '));
*/

// 9. filter & find
// filter untuk menyortir banyak nilai
/*
let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
let angka2 = angka.filter(function(x){
    return x == 5;  
})
console.log(angka2);
*/
// find untuk menyortir satu nilai
let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
let angka2 = angka.find(function(x) {
    return x > 5;
})
console.log(angka2);