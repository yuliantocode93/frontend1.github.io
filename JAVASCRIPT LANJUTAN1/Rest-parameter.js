// Rest Parameter

// function myFunc (a, ...myArgs) {

    // return myArgs ;
    // return Array.from(arguments);
    // return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));


// function jumlahkan (...angka) {
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }

    // return total;
    // return angka.reduce((a,b) => a + b);

// }

// console.log(jumlahkan(1,2,3,4,5));


// Array destructuring
// const kelompok1 = ['kwon', 'yuli', 'juli', 'julian', 'kim'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua, wakil, ...anggota)




// Objek Destructuring
// const team = {
//     pm: 'kwon',
//     frontEnd1: 'yuli',
//     frontEnd2: 'juli',
//     beckEnd: 'julian',
//     ux: 'kim',
//     devOps: 'susi'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);




// Filtering
function filterBy(type, ...values) {

    return values.filter(v => typeof v === type );

}

console.log(filterBy('boolean', 1,2, 'kwon', false, 10, true, 'kiki'));

