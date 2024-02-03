const dispaly= document.querySelector('#display')
const buttons= document.querySelectorAll('input')
let storeNumber=''
let result=''



buttons.forEach((btns)=>{
  btns.addEventListener('click', ()=>{

   
    if(btns.value ==='='){
     
     result= eval(storeNumber)
     dispaly.value =result
     storeNumber=result;

    }else if (btns.value === 'AC'){
      storeNumber=storeNumber.toString().slice(0, -1)
      dispaly.value= storeNumber
    }
    else{
      storeNumber+= btns.value
      dispaly.value= storeNumber
      console.log(storeNumber)
  
  }
  console.log(storeNumber)

  })


})



// function website(docu, app){
//   return docu+ app
// }

// const resultWeb= website(2,4)
// console.log(resultWeb)
// const library= books(2,3)
