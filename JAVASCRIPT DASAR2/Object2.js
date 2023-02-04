// this
// var a = 10;
// console.log(window.a);



// membuat object

/*
// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');

}
this.halo();
// this mengembalikan object global
*/

/*
// cara 2 - object literal
var obj = {a : 10, nama : 'koko'};
obj.halo = function() {
    console.log(this)
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan
*/


// cara 3 - constructor
function halo() {
    console.log(this);
    console.log('halo');
}
var obj2 = new halo();
var obj1 = new halo();
// this mengembalikan object yang baru dibuat
