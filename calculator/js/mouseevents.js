function findNumber(val)
{
//document.getElementById("buttons").value=val;
document.getElementById("display").value+=val;
document.getElementById("displayarea").value+=val;
}
function symbol(val)
{
document.getElementById("display").value=document.getElementById("displayarea").value+val;
document.getElementById("displayarea").value="";
}
function clearAll(){
    document.getElementById("display").value="";
    document.getElementById("displayarea").value="";
}
function calculate() 
{ 
try 
{ 
  document.getElementById("displayarea").value=(eval(document.getElementById("display").value));
//   document.getElementById("displayarea").value=""; 
} 
catch(e) 
{
  c('Error') 
} 
}  