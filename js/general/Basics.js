class Basics
{
	hide(i)
	{
		let hide = document.querySelector(i);
		hide.classList.remove('show-height');
		hide.classList.add('hide-height');
	}
	show(i)
	{
		let show = document.querySelector(i);
		show.classList.remove('hide-height');
		show.classList.add('show-height');
	}
	createHtml(i, content)
	{
		let el = document.querySelector(i);
		el.innerHTML += content;
	}
	replaceHtml(i, content)
	{
		let el = document.querySelector(i);
		el.innerHTML = content;
	}
}
