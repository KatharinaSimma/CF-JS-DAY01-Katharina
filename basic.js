var age = 25
console.log("Hi my name is Martin and I \'m " + age + " years old.");


// Bacic Ecercise Four:
var players = ["Martin", "Thoams", "Peter", "Mathias", "Niki"];
console.log("The most valuable player of the match is " + players[2]+".");


// Intermediate Exercise One:
var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars.sort());


// Intermediate Exercise Two:
var fruit = ["apple", "banana", "kiwi"];
    fruit.push("orange");
        console.log(fruit);
    fruit.pop("orange");
        console.log(fruit);

var animals = ["monkey", "horse", "dog"];
    animals.sort();
        console.log(animals);
    animals.unshift("cat");
        console.log(animals);

// Intermediate Exercise Three:
var exoticfruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var singlefruits = exoticfruit.split(["/"]);
console.log(singlefruits);
console.log(singlefruits.join("\n\n"));

// Advanced Exercise One:
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var sum = a+b+Number(c)+Number(d)+e;
console.log(sum);

var f = '1';
var g = 15;
var h = 8;
var i = "1";

var multiplication = Number(f)*15*8*Number(i);
console.log(multiplication);

document.write("<hr>The result is "+ sum/multiplication);

// Advanced Exercise Two:
var array = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3] ];
console.log(array[1][1]);
console.log(array[4][2]);
console.log(array[5][3]);
console.log(array[2][3]);
console.log(array[2][1]);

// Challenge One:

//for the console:
document.write("<hr>")
var Wien = [
    ["Vienna"," ", " ", " ", " "],
    ["    ","is", " ", " ", " ", " "],
    ["    ","    ", "a", " ", " ", " "],
    ["    ","    ", "    ", "very", " ", " "],
    ["    ","    ", "    ", "    ", "nice", " "],
    ["    ","    ", "    ", "    ", "    ", "City"]];
var WienOutput = Wien[0].join(" ")+ "\n" +
           Wien[2].join(" ")+ "\n" +
           Wien[3].join(" ")+ "\n" +
           Wien[4].join(" ")+ "\n" +
           Wien[5].join(" ");
console.log(WienOutput);

// acilios solution - for document.print:
document.write(Wien[0][0] + "<br>** " + Wien[1][1] + "<br>**** " +Wien[2][2] + "<br>****** " + Wien[3][3] + "<br>*********" + Wien[4][4] + "<br>");

document.write(Wien[0][0] + "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + Wien[1][1] + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + Wien[2][2] + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Wien[3][3] + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Wien[4][4] + "<br>");

document.write("<hr>")


//Challenge Two:
var longString = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up.";

var sentence = (longString.split(["$"]).join(" "));
console.log(sentence);


// Extra Excercise One:

var string = "Hey there, i am a javascript developer, and i live in vienna";
var newstring = string.substring(12,38)+".";

console.log("I " +newstring);
// cheated! How do I turn a single letter to uppercase newstring[0]="I"; doesn't see to work! Why oh why not?


// Extra Exercise Two:

var start = ['apple', 'banana', 'kiwi'];
start.splice(2,0,"orange","strawberry"); 
console.log(start);
// returns the deleted items, not the array!


