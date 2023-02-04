// Destructuring Variable / Assignment

//* Destructuring Array

const perkenalan = ['Halo', 'nama', 'saya', 'Kwon Yuli'];

// const [salam, satu, dua, nama] = perkenalan;

//* skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//* swap items(menukar isi dari variable)

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

//* return value pada function

// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);



//* rest parameter

// const [a, ...values] = [1,2,3,4,5];
// console.log(a)
// console.log(values);



//* Destructuring Object

// const mhs = {
//     nama : 'kwon yuli',
//     umur : 29
// }
// const { nama, umur } = mhs;
// console.log(nama);



//* Assignment tanpa deklarasi object

// ({ nama, umur } = { nama: 'kwon yuli', umur: 29 })
// console.log(nama);




//* Assignment ke variable baru

// const mhs = {
//     nama : 'kwon yuli',
//     umur : 29
// }
// const { nama : n, umur : u } = mhs;
// console.log(n);
// console.log(u);




//* Memberikan Default Value

// const mhs = {
//     nama : 'kwon yuli',
//     umur : 29,
    // email : 'kwonyuli@gmail.com'
// }
// const { nama, umur, email = 'default@gmail.com'} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);




//* Memberi nilai default + assign ke variabel baru

// const mhs = {
//     nama : 'kwon yuli',
//     umur : 29,
//     email : 'kwonyuli@gmail.com'
// }
// const { nama: n, umur: u, email: e = 'default@gmail.com'} = mhs;
// console.log(nama);




//* Rest Parameter
// const mhs = {
//     nama : 'kwon yuli',
//     umur : 29,
//     email : 'kwonyuli@gmail.com'
// }
// const { nama, ...value} = mhs;
// console.log(value);




//* Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'kwon yuli',
    umur: 29,
    email: 'kwonyuli@gmail.com'
}

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs));