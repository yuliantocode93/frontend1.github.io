/*alert('hello world');
alert('ini peringatan');
alert('dari saya');*/

/*let nama = 
prompt('masukan nama');
alert(nama);*/

/*let tes = confirm('anda yakin??');
if(tes === true) {
    alert('user menekan oke');
} else {
    alert('user menekan Cancel');
}*/


//membuat popup perulangan
alert('selamat datang');
let lagi = true;

while (lagi){
    let nama = prompt('masukan nama');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih');