console.clear();
var input = document.querySelector("input");

input.addEventListener("change", myfunc);


function myfunc(e){
   
    console.log(e.target.value);

}
