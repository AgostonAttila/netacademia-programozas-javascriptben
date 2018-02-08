

var valtozo = 5;

function fuggveny(parameter) {

    parameter = parameter || "alma";

    //Bool
    //kivételek
    //-false
    //-0
    //-""
    if (valtozo) {
        //Mindig igaz
        console.log("Igaz");
    }
    console.log(typeof valtozo);
    valtozo = !!valtozo;
    console.log(typeof valtozo);

    valtozo = 5;
    var valami = valtozo || "Ez"; // első igaz értéket adja ki , && nál fordítva
    console.log(valami);


    console.log(" ");

    //String ->Number
    var szoveg = " 5.5d ";
    console.log(parseFloat(szoveg)); //amíg tud parseolni addig értelmezi számként
    console.log(parseInt(szoveg));
    console.log(szoveg);  //spaceket engedi csak meg  , ez ajánlott

    //Math.round

    console.log(([1, "2", 3]).toString());

    console.log(true == " "); // false

    if (" ") {
        console.log("IGAZ!!");
    }

    console.log(null == undefined);//true

    // ===  !==
    console.log(null === undefined); //ezt érdemes   !==

    //Number

    //Number.MAX_VALUE
    //Number.MIN_VALUE

    //NAN == NAN false

    //Number -> String

    var szam = 6;
    var szoveg = "" + szam;

    console.log(szam.toFixed());
    console.log(szam.toPrecision(3));
    console.log(szam.toString());

    console.log("");

    console.log(szam.toString(16));
    console.log(szam.toString(2));


    var hexa = "f4de34";
    console.log(parseInt(hexa, 16));


    //Array
    var array = [];
    //array = new Array();

    array = [2,3,"szoveg"];
    console.log(array);
    //array = new Array(2); // kapacitasat adom meg !!!!!!!!!!!!
    console.log(array[0]);

    array[3] = "alma";

    //array.length

    array.push("alma"); //végére rakom
    //array[3] = undefined;
    delete array[3]; // ez szebb

    var ertek = array.pop(); // végéről vesz ki és eltávolítja

    //indexof

    //shift??

    //Object

    var object = {}; // ezt hasznaljuk
    object = new Object();


    object =
        {
            tulajdonsag: 3,

            metodus: function (a, b, c) {


            }
        };


    //Function

    function nev() { }

    var nev = function nev2() { };
    var nev = function () {
        //extra
        alert("");
    };// nincs neve name-re
    nev.name; //nevét kérem le
    
    var forras = nev.toString();
    forras.replace("//extra", 'console.log("EXTRA");'); //átírom egy egész másra a forráskódót

    var nev = eval("(" + forras+ ");");  //szövegként adok forráskódót és le fogja futtatni


    //RegExp

    console.log(nev.toString()); //Forráskódját megkapom   valamelyik böngészőben nem kapom meg akommenteket

    //String

    var szoveg = "Ez egy szöveg";
    console.log(szoveg[4]);
    console.log(szoveg.charAt(4));

    szoveg = szoveg.bold();
    console.log(szoveg);


    //substring,repleca,split

    //join
    var tomb = ["alma", "barack", 4];
    console.log(tomb.join("||"));
}


fuggveny();