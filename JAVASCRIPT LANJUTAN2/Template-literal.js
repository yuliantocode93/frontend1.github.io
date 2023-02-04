//* Template Literal / Template String

// const nama = 'kwon yuli';
// const umur = 29;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);


//* Embedded Expreesions
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);




//* HTML Fragments
const mhs = {
    nama : 'kwon yuli',
    umur : 33,
    nrp : '043040023',
    email : 'KwonYuli@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);

