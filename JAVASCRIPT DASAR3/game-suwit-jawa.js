let tanya = true;
while (tanya) {
  // menangkap pilihan komputer
  let p = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan komputer
  // membangkitkan bilangan random
  let com = Math.random();

  if (com < 0.34) {
    com = "gajah";
  } else if (com >= 0.34 && com < 0.67) {
    com = "orang";
  } else {
    com = "semut";
  }

  let hasil = "";
  // menentukan rules
  if (p == com) {
    hasil = "seri";
  } else if (p == "gajah") {
    hasil = com == "orang" ? "menang" : "kalah";
  } else if (p == "orang") {
    hasil = com == "gajah" ? "kalah" : "menang";
  } else if (p == "semut") {
    hasil = com == "orang" ? "kalah" : "menang";
  } else {
    hasil = "anda memasukan pilihan yang salah";
  }
  // tampilkan hasilnya
  alert(
    `kamu memilih : ${p} dan komputer memilih : ${com} \n maka hasilnya kamu ${hasil} `);

  tanya = confirm("lagi?")
}
alert("terimakasih sudah bermain");

