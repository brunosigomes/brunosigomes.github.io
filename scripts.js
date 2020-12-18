window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		document.querySelector("header").classList.add("header-efeito");
	} else {
		document.querySelector("header").classList.remove("header-efeito");
	}
});

document.querySelector("#toggle").addEventListener('click', () => {
	document.querySelector("#menu-mobile").classList.toggle("show");
});

document.querySelectorAll(".link-mobile").forEach((link) => {
	link.addEventListener('click', () => {
		document.querySelector("#menu-mobile").classList.remove("show");
	});
});