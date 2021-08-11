window.addEventListener('scroll', function (e) {
	const bgColor = "bg-white"
	// if (getPos(eId('navbar')).window.y1 > 0) {
	// 	eId('navbar').classList.remove('bg-none');
	// 	eId('navbar').classList.add(bgColor);
	// } else {
	// 	eId('navbar').classList.add('bg-none');
	// 	eId('navbar').classList.remove(bgColor);
	// }

	// if (getPos(eId('scrollInfo')).window.y1 > 0) {
	// 	eId('scrollInfo').classList.remove('skuy-show');
	// } else {
	// 	eId('scrollInfo').classList.add('skuy-show');
	// }
})

eId("toggle-show-navbar").addEventListener("click", function () {
	eId('navbar-mobile').classList.remove('hidden');
});
eId("toggle-hide-navbar").addEventListener("click", function () {
	eId('navbar-mobile').classList.add('hidden');
});
eClass('mobile-navbar-link').forEach(function(element){
	element.addEventListener('click', function(){
		eId('navbar-mobile').classList.add('hidden');
	})
})