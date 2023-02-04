//? for..of
//* for biasa
//* Variable Array
// const mhs = ['echo1', 'echo2', 'echo3'];

// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

//* forEach
// mhs.forEach(m => console.log(m));

//* for..of
// for(const m of mhs) {
//     console.log(m);
// }

//* Variable String
// const nama = "echo1";
// for( const n of nama ) {
//     console.log(n);
// }


//* forEach dengan parameter lebih dari 1 contoh ke 1
//  const mhs = ["echo1", "echo2", "echo3"];
//  // eslint-disable-next-line no-unused-vars
//  mhs.forEach((m, i) => console.log(m));

//* forEach dengan parameter lebih dari 1 contoh ke 2
// const mhs = ["echo1", "echo2", "echo3"];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke- ${i}`);
// });


//* Jika pakai "For..of" tidak langsung ketemu index di Array 
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke- ${i}`);
// }



//* Nodelist
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for (n of liNama) {
//     console.log(n.innerHTML)
// }

//* Arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));




//* For..In
const mhs = {
  nama: "kwon",
  umur: 33,
  email: "kwonyuli@gmail.com",
};

for (profil in mhs) {
//   console.log(profil);
    console.log(mhs[profil]);
}












