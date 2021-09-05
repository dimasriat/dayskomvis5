eId("toggle-show-navbar").addEventListener("click", function () {
	eId("navbar-mobile").classList.remove("hidden");
});
eId("toggle-hide-navbar").addEventListener("click", function () {
	eId("navbar-mobile").classList.add("hidden");
});

eClass("dropdown-btn").forEach(function (element) {
	element.addEventListener("click", function () {
		eId(element.dataset.target).classList.toggle("hidden");
		eId(element.dataset.target).classList.toggle("flex");
	});
});
// appsMaterialWizButtonPaperbuttonFocusOverlay
if (eId("gform-frame")) {
	eClass("freebirdFormviewerViewHeaderHeaderBody").forEach(function (btn) {
		btn.addEventListener("click", function () {
			alert("hehehe");
		});
	});
}

function submit_buku_tamu() {
	if (eId('nama').value.trim() === "" || eId('asal').value.trim() === "") {
		alert('harap isi nama dan asal terlebih dahulu yaa 🤗');
		return false;
	} else {
		eId('buku_tamu').submit();
	}
}