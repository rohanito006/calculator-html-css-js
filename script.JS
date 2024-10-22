const touch = [...document.querySelectorAll('.button')]
//console.log(touch);
const listkeycode = touch.map(touch=> touch.dataset.key)
//*console.log(touch);
//*console.log(listkeycode);
document.addEventListener('keydown',(e) =>{
    const valeur = e.keyCode.toString;
   // console.log(valeur);
    
} )

document.addEventListener('click',(e) =>{
    const valeur = e.target
    console.log(valeur);
    
}
)



