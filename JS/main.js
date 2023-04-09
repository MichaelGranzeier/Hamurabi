let deaths = 0;
let year = 1;
let population = 95;
let storage = 3000;
let eat = 0;
let yield = 3;
let price = 3;
let land = 1000;
let I = 5;
let Q = 0;
let N = 0;
let d1 = 0;

function play() {
    document.getElementById("P1").innerHTML = "Hamurabi: I beg to report to you,";
    document.getElementById("P2").innerHTML = "In year " + year + ", \n" + deaths + " people starved, " + I + " people came to the city.";
    population = population + I;
    if (Q >= 0) {
        document.getElementById("P3").innerHTML = "Population is now " + population + ".";
        document.getElementById("btn").onclick = buyLand;
        document.getElementById("btn").innerHTML = "Next";
    } else if (year > 1) {
        population = population / 2;
        population = Math.round(population);
        document.getElementById("P3").innerHTML = "A horrible Plague struck! half the people died.";
        document.getElementById("P4").innerHTML = "Population is now " + population;
        document.getElementById("btn").onclick = buyLand;
        document.getElementById("btn").innerHTML = "Next";
    }
    document.getElementById("P5").innerHTML = "The city now owns " + land + " acres.";
    document.getElementById("P6").innerHTML = "You harvested " + yield + " Bushels per acre.";
    document.getElementById("P7").innerHTML = "The rats ate " + eat + " Bushels.";
    document.getElementById("P8").innerHTML = "You now have " + storage + " Bushels in store";

    if(year > 10){
        end();
    }
    
}

function buyLand(){
    let cost = Math.floor(Math.random() * 10);
    price = cost + 17;

    let userInput = prompt("Land is trading at " + price + " bushels per acre.\nHow many acres do you wish to buy?");
    
    if (userInput === null) {
        errorMessage1();
    }

    userInput = parseInt(userInput);

    if (userInput === "NaN") {
        errorMessage1();
    }

    if(userInput < 0){
        errorMessage1();
    }

    if(userInput >= 0){
        land = land + userInput;
        storage = storage - (yield * userInput);  
    }

    sellLand();
}

function sellLand(){

    let userInput2 = prompt("Land is trading at " + price + " bushels per acre.\nHow many acres do you wish to sell?");

    if (userInput2 === null) {
        errorMessage1();
    }

    userInput2 = parseInt(userInput2);

    if (userInput2 === "NaN") {
        errorMessage1();
    }

    if(userInput2 < 0){
        errorMessage1();
    }

    if(userInput2 >= 0){
        land = land - userInput2;
        storage = storage + (yield * userInput2);  
    }

    plant();
}

function plant(){

    let C = Math.floor(Math.random() * 10);
    yield = C + 17;
    let userInput3 = prompt("How many acres do you wish to plant with seed?");

    if (userInput3 === null) {
        errorMessage1();
    }

    userInput3 = parseInt(userInput3);

    if (userInput3 === "NaN") {
        errorMessage1();
    }

    if(userInput3 < 0){
        errorMessage1();
    }

    if(userInput3 > storage){
        errorMessage4();
    }

    if(userInput3 > land){
        errorMessage3();
    }

    if(userInput3 > (20 * population)){
        errorMessage2();
    }

    if(userInput3 > 0){
        storage = storage - userInput3;
        storage = storage + (yield * userInput3);
    }

    feed();
}

function feed(){
    let userInput4 = prompt("You have " + storage + " bushels of grain left\nHow many bushels do you wish to feed your people?\nIt is recommened that you feed each person 7 bushels minimum.");

    if (userInput4 === null) {
        errorMessage1();
    }

    userInput4 = parseInt(userInput4);

    if (userInput4 === "NaN") {
        errorMessage1();
    }

    if(userInput4 < 0){
        errorMessage1();
    }

    if(userInput4 > storage){
        errorMessage4();
    }

    if(userInput4 <= (7 * population)){
        let survivors = Math.floor(userInput4 / 7);
        deaths = population - survivors;
        population = survivors;
    }

    tick();
}

function tick(){
    year++;
    I = parseInt(Math.random() * (population  * .01) + 1);
    population = population + I;

    rats();

    let randomNum = Math.random();
    Q = randomNum < 0.5 ? 0 : 1;

    if(deaths > .45 * population){
        document.getElementById("P1").innerHTML = "You starved " + deaths + " people in one year!!!";
        document.getElementById("P2").innerHTML = "";
        document.getElementById("P3").innerHTML = "";
        document.getElementById("P4").innerHTML = "";
        document.getElementById("P5").innerHTML = "";
        document.getElementById("P6").innerHTML = "";
        document.getElementById("P7").innerHTML = "";
        document.getElementById("P8").innerHTML = "";
        document.getElementById("btn").onclick = end1;
        document.getElementById("btn").innerHTML = "Next";
    }else{
        p1 = ((year - 1) * p1 + deaths * 100 / population) / year;
        d1 = d1 + deaths;
        play();
    }
    play();
}

function rats(){
    eat = storage - Math.floor(Math.random() * (storage + 1));
    storage = storage - eat;
}

function errorMessage1(){
    document.getElementById("P1").innerHTML = "Hamurabi: I cannot do what you wish.";
    document.getElementById("P2").innerHTML = "Please enter a valid number.";
    document.getElementById("P3").innerHTML = "";
    document.getElementById("P4").innerHTML = "";
    document.getElementById("P5").innerHTML = "";
    document.getElementById("P6").innerHTML = "";
    document.getElementById("P7").innerHTML = "";
    document.getElementById("P8").innerHTML = "";
}

function errorMessage2(){
    document.getElementById("P1").innerHTML = "But you have only " + population + " people to tend the fields! Now then,";
    document.getElementById("P2").innerHTML = "";
    document.getElementById("P3").innerHTML = "";
    document.getElementById("P4").innerHTML = "";
    document.getElementById("P5").innerHTML = "";
    document.getElementById("P6").innerHTML = "";
    document.getElementById("P7").innerHTML = "";
    document.getElementById("P8").innerHTML = "";
}

function errorMessage3(){
    document.getElementById("P1").innerHTML = "Hamurabi: think again. You have only " + land + " acres. Now then,";
    document.getElementById("P2").innerHTML = "";
    document.getElementById("P3").innerHTML = "";
    document.getElementById("P4").innerHTML = "";
    document.getElementById("P5").innerHTML = "";
    document.getElementById("P6").innerHTML = "";
    document.getElementById("P7").innerHTML = "";
    document.getElementById("P8").innerHTML = "";
}

function errorMessage4(){
    document.getElementById("P1").innerHTML = "Hamurabi: think again. You have only " + storage + " bushels of grain. Now then,";
    document.getElementById("P2").innerHTML = "";
    document.getElementById("P3").innerHTML = "";
    document.getElementById("P4").innerHTML = "";
    document.getElementById("P5").innerHTML = "";
    document.getElementById("P6").innerHTML = "";
    document.getElementById("P7").innerHTML = "";
    document.getElementById("P8").innerHTML = "";
}

function end(){
    d1 = deaths;
    document.getElementById("P1").innerHTML = "In your 10-year term of office, " + p1 + " percent of the";
    document.getElementById("P2").innerHTML = "population starved per year on average,";
    document.getElementById("P3").innerHTML = "I.E. a total of " + d1 + " people died!";
    L = A / population;
    document.getElementById("P4").innerHTML = "You started with 10 acres per person and ended with";
    document.getElementById("P5").innerHTML = L + " acres per person.";
    if(p1 > 33 || L < 7){
        end1();
    }
    else if(p1 > 10 || L < 9){
        end2();
    }
    else if(p1 > 3 || L < 10){
        end3();
    }
    else{
        end4();
    }
}

function end1(){
    document.getElementById("P6").innerHTML = "Due to this extreme mismanagement you have not only";
    document.getElementById("P7").innerHTML = "been impeached and throw out of office but you have";
    document.getElementById("P8").innerHTML = "also been declaered a national fool!";
    tone();
}

function end2(){
    document.getElementById("P6").innerHTML = "Your heavy-handed perfomance reeks of Nero and Ivan IV.";
    document.getElementById("P7").innerHTML = "The (remaining) find you and unpleasant ruler, and";
    document.getElementById("P8").innerHTML = "frankly, hate your guts!!";
    tone();
}

function end3(){
    let haters = Math.floor(Math.random()*.8);
    document.getElementById("P6").innerHTML = "Your performance could have been somewhat better, but";
    document.getElementById("P7").innerHTML = "really wasn't too bad at all. " + haters + " people";
    document.getElementById("P8").innerHTML = "would dearly like to see you assassinated but we all have our";
    document.getElementById("P9").innerHTML = "trivial problems.";
    tone();
}

function end4(){
    document.getElementById("P6").innerHTML = "A fantastic performance!!! Charlemange, Alexander III, and";
    document.getElementById("P7").innerHTML = "Kennedy combined could not have done better!";
    document.getElementById("P8").innerHTML = "";
    tone();
}

function tone(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    this.play = function(){
      this.sound.play();
    }
    
    this.stop = function(){
      this.sound.pause();
    }
  }