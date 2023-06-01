//To DO: M+ M- MC functional


let string = ""; 
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>
  {
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string
      }
      else if(e.target.innerHTML == 'C'){
        string = "";
        document.querySelector('input').value = string
      }
      else if(e.target.innerHTML == 'M+'){
        document.getElementById("M+").addEventListener('click',(e)=>{
            string += 1;
            document.getElementById('input').innerText = string
        })
      }
      else{
        console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string
      }
    })
  })
