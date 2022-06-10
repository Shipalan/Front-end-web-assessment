console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!');
}


function compliment(event){
	event.preventDefault();
	

	alert('Whats cookin good lookin?')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.getElementById('duck').addEventListener('mouseover', compliment)