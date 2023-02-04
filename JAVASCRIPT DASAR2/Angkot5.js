let jmlAngkot = 10;
let angkotBeroprasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= 6 && noAngkot !== 5 ) {
        console.log('Angkot no.' + noAngkot + 'beroprasi dengan baik.');
    } else if ( noAngkot === 8 ||  noAngkot === 10 || noAngkot === 5) {
        console.log('angkot no. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('angkot no. ' + noAngkot + ' sedang tidak beroprasi.')
    }
}