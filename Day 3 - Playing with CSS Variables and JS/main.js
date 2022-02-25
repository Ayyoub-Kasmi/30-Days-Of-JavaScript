let root = document.documentElement;
let inputs = document.querySelectorAll('input')
let trial = document.querySelector('#blur')
console.log(trial);
document.body.addEventListener('input', function(e){
	if(e.target.tagName == 'INPUT'){
		inputs.forEach( function(element) {
			if(element == e.target){
				let id = element.id;
				let value = element.value;
				console.log(value);
				root.style.setProperty(`--${id}`, `${value}`)
			}
		});
	}
})