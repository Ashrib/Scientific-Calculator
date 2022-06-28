var input;
function getValue(v) {
    var inpValue = v;
    screen(inpValue);
};
function screen(v) {
    if (v === "=") {
        input = document.getElementById("input");
        let data = input.innerText;
        let total = eval(data);
        document.getElementById("result").innerText = total;
    } 
    else if(v === "clear"){
        document.getElementById("input").innerText = null;
        document.getElementById("result").innerText = null;
    }
    else if(v === "dele"){
        var all = document.getElementById("input").innerText;
        document.getElementById("input").innerText = all.substring(0, all.length - 1);
    }
    else {
        document.getElementById("input").innerText += v;
    }
};
function sqRoot() {     
    var sq = document.getElementById("input").innerText;
    var rtResult = Math.sqrt(sq, 2);
    document.getElementById("result").innerText = rtResult;
};
function cubeRoot() {
    var cRt = document.getElementById("input").innerText;
    var crtResult = Math.sqrt(cRt, 3);
    document.getElementById("result").innerText = crtResult;
}
function sinX() {       ////////////////////////////////
    var all = document.getElementById("input").innerText;
    document.getElementById("result").innerText = Math.sin(all) ;
}
function cosX() {      ////////////////////////////////
    var all = document.getElementById("input").innerText;
    document.getElementById("result").innerText = Math.cos(all) ;
}
function tanX() {      ////////////////////////////////
    var all = document.getElementById("input").innerText;
    document.getElementById("result").innerText = Math.tan(all) ;
}
function pi() {   ////////////////////////////////
    var all = document.getElementById("input").innerText;
    var pi = Math.PI;
    document.getElementById("input").innerText = pi ;
}
function square() {
    var ab = document.getElementById("input").innerText;
    var sqr = ab*ab;
    document.getElementById("result").innerText = sqr; 
}
function cube() {
    var ab = document.getElementById("input").innerText;
    var cube = Math.pow(ab, 3);
    document.getElementById("result").innerText = cube;
}
function log() {
    var ab = document.getElementById("input").innerText;
    var log = Math.log10(ab);
    document.getElementById("result").innerText = log;
}
function exp() {
    var ab = document.getElementById("result").innerText;
    var ex = Math.exp(ab);
    document.getElementById("result").innerText = ex;
}