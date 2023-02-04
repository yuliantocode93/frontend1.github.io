/*let angka = prompt ('masukkan angka :')

switch ( angka) {
    case '1' :
        alert('anda memasukan angka 1');
        break;
    case '2' :
        alert('anda memasukan angka 2');
        break;
    case '2' :
        alert('anda memasukan angka 3');
    default :
        alert('agka yang anda masukan salah');
        break;
}*/

let item = prompt ('masukan nama makanan / minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)');

switch(item) {
    case 'nasi' :
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case "hamburger":
    case "softdrink":
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default :
        alert('anda memasukan nama makanan / minuman yang salah');
        break;
}

