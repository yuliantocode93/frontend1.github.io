

let jmlAngkot = 10;
let angkotBeroprasi = 8;
let noAngkot = 1;

while(noAngkot <= angkotBeroprasi) {
    console.log('angkot no. ' + noAngkot + ' beroprasi dengan  baik');
noAngkot++;
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('angkot no. ' + noAngkot + ' sedang tidak beroprasi');
}