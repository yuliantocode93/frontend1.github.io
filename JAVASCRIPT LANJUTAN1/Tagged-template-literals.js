// Tagged template literals
// const nama = 'Kwon yuli';
// const umur = 33;

// function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;


//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

// }

// const str = coba`halo, nama saya ${nama}, dan saya ${umur} tahun.`;
// console.log(str);


// Highlight
const nama = 'Kwon yuli';
const umur = 29;
const email = 'kwonyuli@gmail.com';

function Highlight(strings, ...values) {
    
    return strings.reduce((result, str, i) => `${result}${str}<span class= "hl">${values[i] || ''}</span>`, '');

}

const str = Highlight`halo, nama saya ${nama}, dan saya ${umur} tahun, dan email saya adalah : ${email}.`;
document.body.innerHTML = str;