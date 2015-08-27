
function getDivHeight(_id){
	return document.getElementById(_id).offsetHeight;
}

function moveHead(){
	var view = document.getElementById('he_ad');
	var bg = document.getElementById('title_bg');
	view.style.height = bg.offsetHeight / 2;
}


function iFrameHeight() {   
	var ifm= document.getElementById("iframepage");   
	var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;   
	if(ifm != null && subWeb != null) {
	   ifm.height = subWeb.body.scrollHeight;
	   ifm.width = subWeb.body.scrollWidth;
	}   
}    
