//* Rest Parameter


// function myFunc() {
//     return [...arguments]
// }

// console.log(myFunc(1,2,3,4,5));

//* Array Constructuring
// const kelompok1 = ['eco1', 'eco2', 'eco3', 'eco4']
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);


//* object destructuring
// const team = {
//     fe : 'eco1',
//     be : 'eco2',
//     ux : 'eeco3',
//     do : 'eco4'
// }

// const  { fe, ...other} = team
// console.log(fe);
// console.log(other);



//* filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'eco'));
