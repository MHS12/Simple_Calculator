
const display = document.querySelector('input') 


function displaybutton(input){
    display.value += input
}



function evelbutton(){
    try{
        display.value = eval(display.value)
    }catch{
        display.value ="ERROR"
    } 
}

function clearbutton(){
    display.value = "0"
}
function clearsinglebutton(){
    display.value = display.value.slice(0, -1);
}