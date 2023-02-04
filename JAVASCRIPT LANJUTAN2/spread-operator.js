//* Spread Operator
//* memecah iterables menjadi element

// const mhs = ['echo1', 'echo2', 'echo3'];
// console.log(...mhs[0]);

// const mhs = ["echo1", "echo2", "echo3"];
// const dosen = ["echo11", "echo22", "echo33"];
// const orang = [...mhs, 'ss',...dosen];

// console.log(orang)



//* Meng-copy array
// const mhs = ["echo1", "echo2", "echo3"];
// const mhs1 = [...mhs];
// mhs1[0] = "echo4";
// console.log(mhs);
// console.log(mhs1);//? mengcopy array


//* mengambil isi element HTML 
// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);





const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map( h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;



