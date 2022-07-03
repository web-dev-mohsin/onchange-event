console.clear();
var input = document.querySelector("input");

input.addEventListener("change", myfunc);


function myfunc(e){
   
    console.log(e.target.value);

}

const programs = document.querySelectorAll("input[name=program]");

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandaler)
})

function programHandaler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }else{
        console.log(e.target.value +" is unchecked")
    }
}

const dep = document.querySelector("#depertmentName");

dep.addEventListener("change", depRead);

function depRead(e){
    console.log(e.target.value);
}