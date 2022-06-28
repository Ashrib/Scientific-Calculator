var input;
function getValue(v) {
    var inpValue = v;
    screen(inpValue);
};
function screen(v) {
    if (v === "=") {
        input = document.getElementById("screen");
        let data = input.innerText;
        let total = eval(data);
        document.getElementById("result").innerText = total;
    } 
    else if(v === "clear"){
        document.getElementById("input").innerText = null;
        document.getElementById("result").innerText = null;
    }
    else if(v === "dele"){
        var all = document.getElementById("input").value;
        document.getElementById("input").innerText = all.substring(0, all.length - 1);
    }
    else {
        document.getElementById("input").innerText += v;
    }
};
function sqRoot() {     ////////////////////////////////
    var sq = document.getElementById("input").value;
    var rtResult = Math.sqrt(sq.value, 2);
    document.getElementById("result").innerText = rtResult;
};
function sinX() {       ////////////////////////////////
    var all = document.getElementById("input").value;
    document.getElementById("result").innerText = Math.sin(all) ;
}
function cosX() {      ////////////////////////////////
    var all = document.getElementById("input").value;
    document.getElementById("result").innerText = Math.cos(all) ;
}
function tanX() {      ////////////////////////////////
    var all = document.getElementById("input").value;
    document.getElementById("result").innerText = Math.tan(all) ;
}
function pi() {   ////////////////////////////////
    var all = document.getElementById("input").value;
    var b = Math.PI(all);
    document.getElementById("result").innerText = b.value ;
}