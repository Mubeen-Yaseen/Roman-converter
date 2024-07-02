const Inputfield=document.querySelector('.inputField');
const Convertbtn=document.querySelector('.convertbtn');
const Result=document.querySelector('.result');

Convertbtn.addEventListener('click', function(){
    const number =parseInt(Inputfield.value)  
   if(!number){
    alert('Please Enter a Valid Number')
   }
   else if(number < 1){
    Result.textContent='Please Enter a number between greater than 1'
   }
   else if(number > 4000){
    Result.textContent='Please Enter a number between less than 4000'
   }else{
       Result.textContent=Romanconversion(number)
   }

   function Romanconversion(number){
   const romanobjects = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
     };
     let Roman='';

     for(let key in romanobjects){
        while(number >= romanobjects[key]){
         Roman+=key
         number -= romanobjects[key]
        }
     }
  return Roman;
   }
});