

var a = 5;
var f = (a === 5 ? "Igaz" : "Hamis");
//console.log(f);

//Objektum

var obj = {
    tulajdonsag: 4,
    metódus: function () { }
};


obj.alma = 3; //nem illdomos használni

obj.tulajdonsag = undefined; //töröltük ,bár igazság szerint nem nem létezik de ha használom létrejön

//tömb vs objektum
//tömbnek van hossza lenght
// ha átugrom 1,2,3 40 elemet beírom
// minden tömb asszociatív tömb
//length az utolsó szám tipusú index+1
//pl almaval beszúrom 41.re akkor nem változik



var tomb = [1, 2, 3, 4];

tomb[40] = 40;// nem töltötte fel hanem length ig megy de ott nincs érték,mivel ot tnem volt a környezet deklarálta nekünk

for (var i = 0; i < tomb.length; i++) {
    if (tomb[i]) {
        console.log(tomb[i]);
    }
}


//ECMA 5
console.log("ELŐTTE");
tomb.forEach(function (ertek, index) {
    console.log(ertek);
});
console.log("UTANA");


//Mindenhol
for (var index in tomb) {
    console.log(tomb[index]);
}

//Fgv,objektum,tömb mind ugyanúgy működik így minden objektum


//window  a globális consoleba


Number.prototype.fgv = function () { var num = ["egy", "ketto", "harom"]; console.log(num[this]); } //minden számon meghívódik így már

(2).fgv();

var tomb = [2, 4, 6, 8];

//beleírta a tömbbe a sumot is a tömmbe 2,4,6,8,sum forinel megyek végig akkor látom ,foral nem

Array.prototype.sum = function () {
    var result = 0;

    for (var i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
}

console.log("összeg: " + tomb.sum());


for (var index in tomb) {
    console.log(tomb[index]);
}

for (var index in tomb) {
    if (tomb.hasOwnProperty(index)) { //saját tulajdonság ,nem prototípuson lett definiálva
        console.log(tomb[index]);
    }
}


//Polyfill
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fg) {
        for (var i = 0; i < this.length; i++) {
            if (i in this) { }
            //ertek,index,tomb
            fn(this[i], i, this);
        }
    }
}

console.log(tomb.toString());


//Array


var tomb = ["a", "b", "c", "d", "e"];

var tomb2 = tomb.slice(1, 3); //1és 2 indexűt rakja bele
console.log(tomb2);

tomb.splice(1); //kitörli kezdő indextől kezdődően ,aktuális tömbön dolgozik
//tomb.splice(1,2); második eleme hány db-ot töröljek
//tomb.splice(1,2,"f","h");  beszúr
//tomb.splice(3,2);  töröl 1 db-t
console.log(tomb);


delete tomb[0];  // tömbbön mindig működik   !!! KIPROBÁLTUK bentmarad


tomb[2] = undefined;  //elem bentmarad a tömbben,hossza nem csökken,  NEM AJANLOTT!!!!!


function valami(a, b, c, d) {
    d = d || "default";

    if (typeof a === "string") {

        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
    else {
        console.log("Nem string");
    }

}

//végtelen ciklus!!!!!!!!!!!!!!   felüldefiniálásra nicns lehetőség így
//function valami(a, b,c) {
//    valami(a,b,c,"default");    
//}


console.log("  ");
console.log("VALAMI!!!");
valami("alma,", 3, true);

//arg[] // tömb féleség



