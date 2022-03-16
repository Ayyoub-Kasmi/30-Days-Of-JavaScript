let section = document.querySelectorAll('.panel');
section.forEach(element => {
	element.addEventListener('click', function(e){
		element.classList.add('open');
		element.classList.add('active');
		setTimeout(()=>{
			element.classList.remove('open');
		},3000)
		setTimeout(()=>{
			element.classList.remove('active');
		}, 3000)
		// element.childNodes[1].style.bottom="0px";
		// element.childNodes[5].style.top="0px";
		// element.style.width="15%";
		// setTimeout(()=>{
		// 	element.style.width="400px"

		// },1000);

		// setTimeout(()=>{
		// element.childNodes[1].style.bottom="50px";
		// element.childNodes[5].style.top="50px";
		// element.style.width="203.594px";
		// }, 3500);


	})
})

function show(e){
	e.target
}
