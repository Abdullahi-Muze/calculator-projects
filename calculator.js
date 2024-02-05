const dispaly= document.querySelector('#display')
const buttons= document.querySelectorAll('input')
let storeNumber=''
let result=''



buttons.forEach((btns)=>{
  btns.addEventListener('click', ()=>{


   
    if(btns.value ==='='){
    //  storeNumber= storeNumber.toString()
     result= eval(storeNumber)
     dispaly.value=result
     storeNumber=result;
     console.log(result)

    }else if (btns.value === 'AC'){
      storeNumber=storeNumber.toString().slice(0, -1)
      dispaly.value= storeNumber
    }
    else{
      if( btns.value === '+' & storeNumber.toString().slice(-1) === '+'||  btns.value === '*' & storeNumber.toString().slice(-1) === '*'||btns.value === '/' & storeNumber.toString().slice(-1) === '/'||btns.value === '-' & storeNumber.toString().slice(-1) === '-'){
        
        console.log('hi')
        // storeNumber+= btns.value
        // dispaly.value= storeNumber
        // console.log(storeNumber)
      }else{

        storeNumber+= btns.value
        dispaly.value= storeNumber
        
        // storeNumber= storeNumber.split(',')
        console.log(storeNumber.slice(-1))
        console.log(storeNumber)
        }
      // storeNumber+= btns.value
      // dispaly.value= storeNumber
      // console.log(storeNumber)
  
  }
  // console.log(typeof(storeNumber))

  })


})



// function website(docu, app){
//   return docu+ app
// }

// const resultWeb= website(2,4)
// console.log(resultWeb)
// const library= books(2,3)

// let string= '1,2,3,4'
// console.log(typeof(string))
// console.log(string)

// let ku= string.split(',')
// console.log(typeof(ku))
// console.log(ku)

// console.log('dhexdhexaad')

// let array= [1,2,3,4]
// console.log(typeof(array))
// console.log(array[2])

// let ka= array.toString()
// console.log(typeof(ka))
// console.log(ka[2])


