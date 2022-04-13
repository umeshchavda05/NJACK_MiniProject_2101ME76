function valInc() {
    x = Number(document.getElementById("counter").innerHTML);
    x += 1
    document.getElementById("counter").innerHTML = x
}

function valDec() {
    if (Number(document.getElementById("counter").innerHTML)>=1){

        x = Number(document.getElementById("counter").innerHTML);
        x -= 1
        document.getElementById("counter").innerHTML = x
    }
    
    else if (Number(document.getElementById("counter").innerHTML)==0){
        alert("The counter value can't be negative!")
    }
}

function reset(){
    document.getElementById("counter").innerHTML = 0
}

document.getElementById("inc").addEventListener("click", valInc);

document.getElementById("dec").addEventListener("click", valDec);

document.getElementById("reset").addEventListener("click", reset);

