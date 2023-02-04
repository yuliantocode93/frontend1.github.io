const ubahWarna = document.getElementById('ubahWarna');
ubahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const acakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
acakWarna.appendChild(teksTombol);
acakWarna.setAttribute('type', 'button');
ubahWarna.after(acakWarna);

acakWarna.addEventListener('input', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b +')';
});

const SRed = document.querySelector('input[name=SRed]');
const SGreen = document.querySelector('input[name=SGreen]');
const SBlue = document.querySelector('input[name=SBlue]');

SRed.addEventListener('input', function() {
    const r = SRed.value;
    const g = SGreen.value;
    const b = SBlue.value;
   document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

SGreen.addEventListener('input', function () {
    const r = SRed.value;
    const g = SGreen.value;
    const b = SBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

SBlue.addEventListener('input', function () {
    const r = SRed.value;
    const g = SGreen.value;
    const b = SBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});



document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos+','+ yPos +',100)'

});