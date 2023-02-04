// MEMBUAT ANIMASI PADA BOX

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});






// Konsep this pada Arrow Function
// Constructor function

// const mahasiswa = function() {
//     this.nama = "echo";
//     this.umur = "30";
//     this.call = function () {
//         console.log(`panggil ${this.nama}, ysng berumur ${this.umur} tahun`);
//     }

// }


// const echo = new mahasiswa();




// ARROW FUNCTION (=>) TIDAK MEMILIKI KONSEP THIS
// const mhs1 = {
//     nama: 'Echo1',
//     umur: 20,
//     call: () => {
//         // console.log(`panggil ${this.nama} umur ${this.umur}`);
//         console.log(this);
//     }
// }





// const mhs1 = function () {
//     this.nama = "echo";
//     this.umur = 30;
//     this.call = function () {
//         console.log(`panggil ${this.nama} yang berumur ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 5);
// };

// // eslint-disable-next-line no-unused-vars
// const echo = new mhs1();
