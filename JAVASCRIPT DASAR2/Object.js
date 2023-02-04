
/*
// membuat object 
let mhs = {
    nama : 'kwon yuli',
    umur : '29',
    ips : [3.00, 2.50, 3.20],
    alamat : {
        jalan : " JL. KH. Ahmad dahlan",
        kota : 'metro',
        provinsi : 'lampung'
    }
};
*/

// Object Literal
let mhs1 = {
    nama : 'Kwon yuli',
    Facebook : 'Julian Kim',
    email: 'jooliantoo@gmail.com',
    jurusan : 'informatika'
};

let mhs2 = {
    nama: 'Koko yuli',
    Facebook: 'Juli Kim',
    email: 'jooliantoo@yahoo.com',
    jurusan: 'MTK'
};

// Function Declaration
function buatObjectMahasiswa(nama, Facebook, email, jurusan) {
    let mhs ={};
    mhs.nama = nama;
    mhs.Facebook = Facebook;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs3 = buatObjectMahasiswa('koko', 'kokokim', 'kokokim@gmail.com', 'teknik industry');

// Constructor
function Mahasiswa(nama, Facebook, email, jurusan) {
    // let this = {};
    this.nama = nama;
    this.Facebook = Facebook;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

let mhs4 = new Mahasiswa('erik', 'fb013040321', 'erik@gmail.com', 'teknik mesin');
