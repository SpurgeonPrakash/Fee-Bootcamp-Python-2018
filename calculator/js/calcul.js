function numbersOnly(event)
{
    document.getElementById("displayarea").value="";
   var charCode = (event.which) ? event.which : event.keyCode;
   if(charCode==43)
   {
    document.getElementById("displayarea").value=eval(document.getElementById("display").value);
    document.getElementById("display").value=eval(document.getElementById("display").value)+"+";
    // document.getElementById("displayarea").value="";
    
   }
   if(charCode==45)
   {
    document.getElementById("displayarea").value=eval(document.getElementById("display").value);
    document.getElementById("display").value=eval(document.getElementById("display").value)+"-";

   }
   if(charCode==42)
   {
    document.getElementById("displayarea").value=eval(document.getElementById("display").value);
    document.getElementById("display").value=eval(document.getElementById("display").value)+"*";

   }
   if(charCode==47)
   {
    document.getElementById("displayarea").value=eval(document.getElementById("display").value);
    document.getElementById("display").value=eval(document.getElementById("display").value)+"/";

   }
   if (charCode == 46){
    document.getElementById("display").value+=".";
   }
   if(charCode==61)
   {
   
  
    // document.getElementById("displayarea").value="";
    document.getElementById("displayarea").value=eval(document.getElementById("display").value);


   }
   

 if (charCode > 31 && (charCode < 48 || charCode > 57))
     return false;

     document.getElementById("display").value+=charCode-48;

    //  document.getElementById("displayarea").value="";
    //document.getElementById("displayarea").value=eval(document.getElementById("display").value);
    // document.getElementById("displayarea").value="";
    return false;
 
}
function addition()
{
    
}

    