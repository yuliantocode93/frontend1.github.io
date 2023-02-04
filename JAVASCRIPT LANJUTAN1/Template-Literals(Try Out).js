// 1. HTML Fragments
// const mhs = {
//     nama: 'Kwon Yuli',
//     umur: 29,
//     nrp: '043040023',
//     email: 'kwonyuli@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama : 'kwon yuli',
//         email : 'kwonyuli@gmail.com'
//     },
//      {
//         nama: 'kiki',
//         email: 'kiki@gmail.com'
//     },
//     {
//         nama: 'yuli',
//         email: 'yuli@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


//  3. Conditionals
// ternary

// const lagu = {
//     judul : 'kau adalah',
//     penyanyi : 'Isyana Sarasvati',
//     feat : 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;



// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama : 'Kwon Yuli',
    semester : 8,
    matakuliah: [
        'rekayasa WEB',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(matakuliah) {
    return `
    <ol>
        ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`



document.body.innerHTML = el;