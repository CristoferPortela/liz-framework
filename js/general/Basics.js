function hide(i) {
	let hide = document.querySelector(i);
	hide.classList.remove('show-height');
	hide.classList.add('hide-height');
}
function show(i) {
	let show = document.querySelector(i);
	show.classList.remove('hide-height');
	show.classList.add('show-height');
}
function insertHtml(i, content) {
	let el = document.querySelector(i);
	el.innerHTML += content;
}
function replaceHtml(i, content) {
	let el = document.querySelector(i);
	el.innerHTML = content;
}
