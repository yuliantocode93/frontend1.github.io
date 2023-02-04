
// parameter
/*function tambah(a,b){
    return a + b;
}

function kali(a,b){
    return a * b;
}

let hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);*/

/*let a = parseInt(prompt('masukan nilai 1:'));
let b = parseInt(prompt('masukan nilai 2:'));
let hasil = tambah(a*2,b*2);
console.log(hasil);*/

// arguments

function tambah(){
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

let coba = tambah(1,2,3);
console.log(coba);