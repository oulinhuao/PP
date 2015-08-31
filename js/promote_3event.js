
function getContent(keyvalue){
    return window.localStorage.keyvalue;
}

function showOne(){
	var keyvalue = getDate2()+"1";// 字段名
	
	var view = document.getElementById("event1");
	var value = getContent(keyvalue);
	if(!value){
		window.localStorage.keyvalue = "今天的天气";
		var view_content = document.getElementById("event1");
		var view_show = document.getElementById("msg_show1");// 显示文本控件
		
		view.style.display = "block";
		view_content.innerText = value;// 赋值
		view_show.style.display = "block";
	}else{
		view.style.display = "none";
		
		
	}
}
