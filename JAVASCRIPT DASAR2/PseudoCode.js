let penumpang = ['joni', undefined, 'sisi'];
let tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0) {

        // tambabh penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
       return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for( let i = 0; i < penumpang.length; i++) {

            // jika ada kursi kosong
            if( penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari finction
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah didalam angkot.');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if ( i == penumpang.length - 1 ) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }        
    }            
}     

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log('angkot masih kosong.');
    } else {
        for(let i = 0; i < penumpang.length; i++ ) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
            } else if(i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
            }
        }
    }
    return penumpang;
}