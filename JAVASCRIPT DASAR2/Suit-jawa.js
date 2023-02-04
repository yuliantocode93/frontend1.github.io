let tanya = true;
while (tanya) {
// menangkap pilihan player
let p = prompt('pilih : gajah, semut, orang');
// menangkap pilihan computer
// membangkitkan bilangan random
let comp = Math.random();

if ( comp < 0.34) {
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

// membuat rules

let hasil = '';

if ( p == comp) { 
    hasil = 'SERI';
} else if ( p == 'orang') {
    hasil = (comp == 'gajah') ? 'MENANG':'KALAH';
} else if ( p == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'salah pilih';
}

// tampilkan rules
alert('kamu pilih ' + p + ' dan komputer pilih' + comp + '\n maka hasilnya : kamu ' + hasil);

tanya = confirm ( 'lagi ?');
}
alert('terima kasih sudah bermain😊');