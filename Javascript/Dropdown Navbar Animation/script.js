let hasDrop = document.querySelectorAll('.hasDropdown')
let dropdown  = document.querySelectorAll('.dropdown')

let t = -1;
let opened;
for(let i=0; i<hasDrop.length; i++){
 hasDrop[i].addEventListener('click', () =>{
   for(let j=0; j<hasDrop.length; j++){
     if(dropdown[j].classList.contains('show') && t != i){
      dropdown[j].classList.remove('show');
      dropdown[j].classList.add('hide');
     }
   }
   if(t == i && opened){
    dropdown[i].classList.remove('show');
    dropdown[i].classList.add('hide');
    opened = false;  
   }
   else{
    if(dropdown[i].classList.contains('hide')){
      dropdown[i].classList.remove('hide');
    }
    dropdown[i].classList.add('show');
    opened = true;
    t = i;
   }
 }) 
}

