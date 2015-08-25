
function getDivHeight(_id){
	return document.getElementById(_id).offsetHeight;
}

function moveHead(){
	var view = document.getElementById('he_ad');
	var bg = document.getElementById('title_bg');
	view.style.height = bg.offsetHeight / 2;
}
