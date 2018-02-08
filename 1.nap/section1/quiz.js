//Alap típusok
var number = 42; //42.01 (double)
var string = "42"; //'42', 'almafa'
var boolean = true; //false
var array = [4, 2]; //new Array()
var object = {}; //new Object(), JSON!

//Fontosabb objektumok:
var regexp = / /g; //new RegExp()
var date = Date.now(); //new Date()
var func = function () { }; //new Function(), ez is object!

//Operátorok
var a = number + number; //84
var b = number + string; //'4242' (toString)
var c = number + boolean; //43 (toNumber)
var d = string + string; // '4242'
var e = string + array; //'424,2' (toPrimitive -> toString)
var f = array + string; // '4,242'
var g = string + object // '42[object Object]' (toPrimitive -> toString)
var h = array + array; //'4,24,2' (toPrimitive -> toString)
var i = object + object; //'[object Object][object Object]' (toPrimitive -> toString)

number++; //43
string++; //43 !!!

//Összehasonlítás

//toPrimitive -> toNumber (EGYENLŐSÉG!)
a = ("42" == 42); //true
a = ("42" == [42]); //true
a = (42 == ["42"]); //true

b = (true == 42); //true
b = (true == 0); //false
b = (true == -42); //true
b = (true == "42"); //true
b = (true == "0"); //false
b = (true == ["42"]); //true

c = (true == ""); //false
c = (true == " "); //false

//IF-ként DEMÓZNI!
//toBoolean (LÉTEZÉS!)
d = (42 ? true : false); //true
d = (0 ? true : false); //false
d = ("" ? true : false); //false
d = (" " ? true : false); //true !!!

//referencia
e = ([1, 2] == [1, 2]) //false
var f = array;
g = (array == f) //true

//konstansok
a = null;
var nincs; //undefined
b = (a == b); //true !!!
c = undefined;
d = (a == c); //true !!!

e = NaN;
f = (e == e) //false !!!

//strict eq
a = (["  423 "] == 423); //true
b = (["  423 "] === 423); //false 
//csak azonos típusok, azonos értékei
//azonos referenciák
//kivétel:
c = ((+0) === (-0)); //true

//Konverzió (cast)
a = +"45"; //45
a = +"-45"; //-45
a = +["  -45 "]; //45
a = -"45"; //-45

//kétszeres NEGÁCIÓ
b = !!1; //true
b = !!0; //false
b = !!"45"; //true
b = !!""; //false
b = !!" "; //true !!!
b = !![3, 4]; //true

c = "" + 45; //'45'
c = "" + [3, 4] //'3,4'

//cpp style:
a = Number("  45 "); //45
b = String(45); //'45'
c = Boolean(45); //true
d = Array("45"); //["45"]
d = Array(45); //[45 x undefined] !!! (length: 45)
e = Object(45); //Number !!! (referencia)
//f = Function(...) csak említés szinten

//new
a = new Number(45);
b = (a == 45) //true
c = new Number(45);
d = (45 == c) //true
e = (a == c) //false !!! (referencia)

//typeof
var a = typeof 42; //umber
var b = typeof "42"; //string
//typeof NaN/Infinity, helyett isNaN/isFinite
var b = typeof true; //boolean
var c = typeof [1, 2]; //object !!!
var d = typeof { a: 2, b: 3 }; //object !!!
var e = typeof null; //object !!!
var f = typeof undefined; //undefined
var g = typeof func; //function !!!
//typeof arguments; object (majd a nagyon)
//Object.prototype.toString.call(); csak említés szinten (majd a nagyon)