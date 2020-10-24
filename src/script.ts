document.querySelectorAll(".emoji").forEach((el) => {
	el.addEventListener("click", () => {
		document
			.querySelectorAll(".emoji.active")
			.forEach((active) => active.classList.remove("active"));
		requestAnimationFrame(() => el.classList.add("active"));
	});
});
