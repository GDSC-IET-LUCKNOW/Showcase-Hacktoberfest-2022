const btns =document.querySelectorAll(".acc-btn")

//fn
function accordion() {
	// this = the btn ! icon & bg changed
	this.classList.toggle("is-op en");

	//the acc-content
	const content = this.nextElementSibling;

	//If open,close ! else open
	if (content.style.maxheight) content.style.maxHeight = null;
	else content.style.maxHeight = content.scrollHeight + "px";
}

//event
btns.forEach((el) => el.addEventListener("click",accordion));
