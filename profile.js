
function favColor(event){
    event.preventDefault();    
    document.getElementById('color').classList.add('grow');
    alert('My favorite color is Red!')
}
function favPlace(event){
    event.preventDefault(); 
    document.getElementById('place').classList.add('grow');   
    alert('My favorite place is Island Park Idaho, its where my family does our yearly get-together!')
}
function favRitual(event){
    event.preventDefault();  
    document.getElementById('ritual').classList.add('grow'); 
    alert('My favorite ritual is gaming I think. I do it every night so I can chat with my friends.')
}





document.getElementById('color').addEventListener('click', favColor)
document.getElementById('place').addEventListener('click', favPlace)
document.getElementById('ritual').addEventListener('click', favRitual)
