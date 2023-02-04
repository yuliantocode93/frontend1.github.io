/*
let s = '';
for ( let i = 0; i < 100; i++) {
    for( let j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);
*/

let s = '';
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);