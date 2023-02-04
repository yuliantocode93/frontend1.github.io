// membuat function
function jumlahVolumeDuaKubus (a, b) {
    let volumeA;
    let volumeB;
    let total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}
// menjalankan function
alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 15));
