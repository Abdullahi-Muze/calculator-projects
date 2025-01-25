let btns= document.querySelectorAll(".btn")
let calcu= document.querySelector(".equal")
let display= document.querySelector(".display")
let btnClear= document.querySelector(".btnClear")

let calcStore='';
let result;



btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{

        console.log(calcStore+=btn.value);
        display.innerHTML= calcStore

    })
})


calcu.addEventListener("click" , ()=>{
    result= eval(calcStore)
    calcStore= result;
    display.innerHTML= result
    console.log(result)
    console.log(num, merkki)
})

btnClear.addEventListener("click",()=>{
    calcStore=0;
    result= 0;
    display.innerHTML= ''; 
})
