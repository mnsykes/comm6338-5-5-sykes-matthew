const form = document.querySelector("form");

form.onsubmit = (e) => {
	e.preventDefault();

	const list = document.querySelector("#todo-list");
	const input = document.querySelector("input");
	const data = input.value.trim();
	const btn = document.createElement("button");

	btn.textContent = data;

	const item = document.createElement("li");

	if (data.length > 0) {
		item.appendChild(btn);
		list.appendChild(item);

		input.value = "";
	}
	let btnCount = 0;

	btn.addEventListener("click", (e) => {
		e.preventDefault();
		btnCount += 1;

		switch (btnCount) {
			case 1:
				btn.style.textDecoration = "line-through";
				break;
			case 2:
				item.remove();
				break;
			default:
				break;
		}
	});
};
