//* Destructuring Function

// function kalkulasi(a,b) {
//     return [a+b, a-b, a*b, a/b];
// }

// const [tambah, kurang, kali, bagi, akar = 'tidak ada'] = kalkulasi(6, 2);
// console.log(bagi);




//* Destructuring Return Value

// function kalkulasi(a,b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const { bagi, tambah, kurang, kali} = kalkulasi(6, 3);
// console.log(bagi);



//* Destructuring Function Arguments

const mhs1 = {
    nama: 'Kwon Yuli',
    umur: 29,
    email: 'kwonyuli@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, saya berusia ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));




function cetakMhs({nama, umur, nilai: { tugas, uts, uas }}) {
    return `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan nilai UAS saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));


