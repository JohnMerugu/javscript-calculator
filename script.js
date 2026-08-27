
const display= document.getElementById("display");

function appendToDisplay(input)
{
 display.value = display.value + input;
}

function clearDisplay()
{

   display.value ="";
}
function backspace()
{
    if(display.value.length>1)
    {
        display.value=display.value.slice(0,-1);
    }
    else{
        display.value=" ";
    }
}
function calculate()
{
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}