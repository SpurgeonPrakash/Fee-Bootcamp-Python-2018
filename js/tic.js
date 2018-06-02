var zeichen = "O";

 var movements=[]; 
//setzt Buttons zurück
function zuruecksetzen() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    //b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
    
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}

function buttonsdeaktivieren() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    
    //b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function popupzeigen(gewinner) {
     for(var iter=1;iter<=9;iter++){
         //console.log(document.getElementById(iter));
         console.log("won");
         document.getElementById(iter).style.pointerEvents='none';
     }
}

//prüft, ob Spiel zu Ende ist
function endepruefen() {
    //Zustand der Buttons wird ausgelesen
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;

    var ans;
    var points=[];
    //obere Reihe
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        ans=b1;
        points.push("1");
        points.push("2");
        points.push("3");
        popupzeigen(b1);
    }
    //linke Spalte
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        ans=b1;
        points.push("1");
        points.push("4");
        points.push("7");
        popupzeigen(b1);
    }
    //untere Reihe
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        ans=b9;
        points.push("9");
        points.push("8");
        points.push("7");
        popupzeigen(b9);
    }
    //rechte Spalte
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
        ans=b9;
        points.push("9");
        points.push("6");
        points.push("3");
      popupzeigen(b9);
    }
    //mittlere Reihe
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        ans=b4;
        points.push("4");
        points.push("5");
        points.push("6");
      popupzeigen(b4);
    }
    //mittlere Spalte
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        ans=b2;
        points.push("2");
        points.push("5");
        points.push("8");
      popupzeigen(b2);
    }
    //1-9 Diagonale
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
        ans=b1;
        points.push("1");
        points.push("5");
        points.push("9");
      popupzeigen(b1);
    }
    //7-3 Diagonale
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
        ans=b7;
        points.push("7");
        points.push("5");
        points.push("3");
      popupzeigen(b7);
    }
    if(ans=="X"){

        for(var i=0;i<points.length;i++){
            document.getElementById(points[i]).innerHTML="<img src='images/red.png' width=80px heigth=80px style='margin-top:18px;'>";
            document.getElementById("music").innerHTML="<embed src='winning.mp3' autostart='true' loop='true' width='2' height='0'></embed>"
            // var u1=document.getElementsBy("u");
            // u1.disabled="true"
        }
    }
    else{
        
        for(var i=0;i<points.length;i++){
            document.getElementById(points[i]).innerHTML="<img src='images/heart.png' width=80px heigth=80px style='margin-right:5px;'>";
            document.getElementById("music").innerHTML="<embed src='winning.mp3' autostart='true' loop='true' width='2' height='0'></embed>"
            
        }
    }
    }

  
  
  
//X oder Y einsetzen
function setzen(x, zeichen) {
    var button=null;
     if (x==1) {
     button = document.getElementById("1");
     button.value = zeichen;
     movements.push("1");
    document.getElementById('1').style.pointerEvents = 'none';
    
     }
     else if (x==2) {
      button = document.getElementById("2");
     button.value = zeichen;
     movements.push("2");
     document.getElementById('2').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==3) {
      button = document.getElementById("3");
     button.value = zeichen;
     movements.push("3");
     document.getElementById('3').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==4) {
      button = document.getElementById("4");
     button.value = zeichen;
     movements.push("4");
     document.getElementById('4').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==5) {
      button = document.getElementById("5");
     button.value = zeichen;
     movements.push("5");
     document.getElementById('5').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==6) {
      button = document.getElementById("6");
     button.value = zeichen;
     movements.push("6");
     document.getElementById('6').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==7) {
      button = document.getElementById("7");
     button.value = zeichen;
     movements.push("7");
     document.getElementById('7').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==8) {
      button = document.getElementById("8");
     button.value = zeichen;
     movements.push("8");
     document.getElementById('8').style.pointerEvents = 'none';
     button.disabled=true;
     }
     else if (x==9) {
      button = document.getElementById("9");
     button.value = zeichen;
     movements.push("9");
     document.getElementById('9').style.pointerEvents = 'none';
     button.disabled=true;
     }
     if(zeichen=='X'){
        button.innerHTML = "<span class='glyphicon glyphicon-heart' style='color:red;font-size:60px;margin-top:20px;'></span>";
     }
     else{
        button.innerHTML = "<span class='glyphicon glyphicon-heart' style='color:blue;font-size:60px;margin-top:20px;'></span>";
     }
     endepruefen();
     }
  
//welches Zeichen?
function xoo(button) {
    if (zeichen=="X") {
    zeichen="O";
    setzen(button, zeichen);
    }
    else if (zeichen=="O") {
    zeichen="X";
    setzen(button, zeichen);
    }
    }
//resetting everything
function resetAll(){
    for(var iter=1;iter<=9;iter++){
        document.getElementById(iter).style.pointerEvents='initial';
        document.getElementById(iter).value="";
        document.getElementById(iter).innerHTML="";
    }
    document.getElementById("music").innerHTML="<embed src='beat.mp3' autostart='true' loop='true' width='2' height='0'></embed>"
    
}
function undo(){
    if(zeichen=="X"){
        zeichen="O";
    }
    else if(zeichen=="O"){
        zeichen="X";
    }
    document.getElementById(movements[movements.length-1]).innerHTML="";
    document.getElementById(movements[movements.length-1]).style.pointerEvents="initial";
    movements.splice(movements.length-1,1)
}